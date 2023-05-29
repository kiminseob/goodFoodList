import { flow, makeObservable, observable, toJS } from 'mobx';
import {
  GoogleSpreadsheet,
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet,
} from 'google-spreadsheet';
import credential from 'db/googleSpreadsheet.json';
import { currentDate, currentTime } from 'utils/date';
import _ from 'lodash';
import type { SheetTitleValue } from 'types/googlesheet';

export const SHEET_TITLE = {
  ALL: 'All',
  EXPENSE: 'Expense',
  USER: 'User',
  REVIEW: 'Review',
};

type SheetType = Record<SheetTitleValue, GoogleSpreadsheetWorksheet | null>;
type SheetRowType = Record<SheetTitleValue, GoogleSpreadsheetRow[]>;

class GooglesheetStore {
  _sheet: SheetType = { All: null, Expense: null, User: null, Review: null };
  _sheetRows: SheetRowType = { All: [], Expense: [], User: [], Review: [] };
  _isLoading: Record<SheetTitleValue, boolean> = {
    All: true,
    Expense: true,
    User: true,
    Review: true,
  };

  constructor() {
    makeObservable(this, {
      _sheet: observable.ref,
      _sheetRows: observable.ref,
      _isLoading: observable,
      fetchGoogleSheetRows: flow.bound,
      addSheetRows: flow.bound,
      updateSheetRows: flow.bound,
    });
  }

  *fetchGoogleSheetRows(sheetTitle: SheetTitleValue) {
    const doc: GoogleSpreadsheet = yield getGoogleSheet();
    const sheet: GoogleSpreadsheetWorksheet = doc.sheetsByTitle[sheetTitle];
    const sheetRows: GoogleSpreadsheetRow[] = yield sheet.getRows();

    this._sheet = { ...this._sheet, [sheetTitle]: sheet };
    this._sheetRows = { ...this._sheetRows, [sheetTitle]: sheetRows };
    this._isLoading = { ...this._isLoading, [sheetTitle]: false };
  }

  *addSheetRows(
    sheetTitle: SheetTitleValue,
    values: { [header: string]: string | number | boolean }
  ) {
    const row = _.cloneDeep(values);

    if (Array.isArray(row.category)) {
      row.category = row.category.toString();
    }

    if (Array.isArray(row.keywords)) {
      row.keywords = row.keywords.toString();
    }

    row.timeStamp = timeStamp();

    const result: GoogleSpreadsheetRow = yield this._sheet[sheetTitle]?.addRow(
      row
    );

    this.fetchGoogleSheetRows(sheetTitle);

    return result;
  }

  *updateSheetRows(
    sheetTitle: SheetTitleValue,
    rowIndex: number,
    updatedValue: string | Record<string, string>,
    header?: string
  ) {
    const sheetRows = this._sheetRows[sheetTitle];

    if (typeof updatedValue === 'object') {
      Object.entries(updatedValue).forEach(([k, v]) => {
        sheetRows[rowIndex - 2][k] = Array.isArray(v) ? v.toString() : v;
      });
    }

    if (header) {
      sheetRows[rowIndex - 2][header] = updatedValue;
    }

    sheetRows[rowIndex - 2].timeStamp = timeStamp();

    yield sheetRows[rowIndex - 2].save();
    this.fetchGoogleSheetRows(sheetTitle);
  }

  get sheet() {
    return toJS(this._sheet);
  }

  get sheetRows() {
    return toJS(this._sheetRows);
  }

  get isLoading() {
    return toJS(this._isLoading);
  }
}

const getGoogleSheet: () => Promise<GoogleSpreadsheet> = async () => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEETS_ID);
  await doc.useServiceAccountAuth(credential);
  await doc.loadInfo();
  return doc;
};

const timeStamp = () => `${currentDate()} ${currentTime()}`;

export default GooglesheetStore;
