import { flow, makeObservable, observable } from 'mobx';
import {
  GoogleSpreadsheet,
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet,
} from 'google-spreadsheet';
import credential from 'db/googleSpreadsheet.json';
import _ from 'lodash';

class GooglesheetStore {
  sheetId: number = 0;
  sheet: GoogleSpreadsheetWorksheet | null = null;
  sheetRows: GoogleSpreadsheetRow[] = [];

  constructor() {
    makeObservable(this, {
      sheet: observable,
      sheetRows: observable,
      fetchGoogleSheetRows: flow.bound,
      addSheetRows: flow.bound,
      updateSheetRows: flow.bound,
    });
  }

  *fetchGoogleSheetRows(sheetId?: number) {
    const doc: GoogleSpreadsheet = yield getGoogleSheet();
    const sheet: GoogleSpreadsheetWorksheet =
      doc.sheetsById[sheetId ?? this.sheetId];
    const sheetRows: GoogleSpreadsheetRow[] = yield sheet.getRows();

    if (!_.isNil(sheetId)) this.sheetId = sheetId;

    this.sheet = sheet;
    this.sheetRows = sheetRows;
  }

  *addSheetRows(values: { [header: string]: string | number | boolean }) {
    const row = _.cloneDeep(values);

    if (Array.isArray(row.category)) {
      row.category = row.category.toString();
    }

    if (Array.isArray(row.keywords)) {
      row.keywords = row.keywords.toString();
    }

    const result: GoogleSpreadsheetRow = yield this.sheet?.addRow(row);
    this.fetchGoogleSheetRows();

    return result;
  }

  *updateSheetRows(
    rowIndex: number,
    updatedValue: string | Record<string, string>,
    header?: string
  ) {
    if (typeof updatedValue === 'object') {
      Object.entries(updatedValue).forEach(
        ([k, v]) => (this.sheetRows[rowIndex - 2][k] = v)
      );
    }

    if (header) {
      this.sheetRows[rowIndex - 2][header] = updatedValue;
    }

    yield this.sheetRows[rowIndex - 2].save();
    this.fetchGoogleSheetRows();
  }
}

const getGoogleSheet: () => Promise<GoogleSpreadsheet> = async () => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEETS_ID);
  await doc.useServiceAccountAuth(credential);
  await doc.loadInfo();
  return doc;
};

export default new GooglesheetStore();
