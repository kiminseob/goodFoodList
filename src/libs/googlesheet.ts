import { useEffect, useState } from 'react';
import {
  GoogleSpreadsheet,
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet,
} from 'google-spreadsheet';
import credential from 'db/googleSpreadsheet.json';
import _ from 'lodash';
import { SheetFn } from 'types/googleSheet';

type useGoogleSheetReturnType = [GoogleSpreadsheetRow[], SheetFn];

const useGoogleSheet = (sheetId: number): useGoogleSheetReturnType => {
  const [sheet, setSheet] = useState<GoogleSpreadsheetWorksheet>();
  const [sheetRows, setSheetRows] = useState<GoogleSpreadsheetRow[]>([]);

  const fetchGoogleSheetRows = async () => {
    const doc = await getGoogleSheet();
    const sheet = doc.sheetsById[sheetId];
    const rows = await sheet.getRows();

    setSheet(sheet);
    setSheetRows(rows);
  };

  const addSheetRows = async (values: {
    [header: string]: string | number | boolean;
  }) => {
    const row = _.cloneDeep(values);

    if (Array.isArray(row.category)) {
      row.category = row.category.toString();
    }

    if (Array.isArray(row.keywords)) {
      row.keywords = row.keywords.toString();
    }

    return await sheet?.addRow(row);
  };

  const updateSheetRows = async (
    rowIndex: number,
    updatedValue: string | Record<string, string>,
    header?: string
  ) => {
    if (typeof updatedValue === 'object') {
      Object.entries(updatedValue).forEach(
        ([k, v]) => (sheetRows[rowIndex - 2][k] = v)
      );
    }

    if (header) {
      sheetRows[rowIndex - 2][header] = updatedValue;
    }

    return await sheetRows[rowIndex - 2].save();
  };

  useEffect(() => {
    fetchGoogleSheetRows();
  }, []);

  return [sheetRows, { addSheetRows, updateSheetRows }];
};

export const getGoogleSheet: () => Promise<GoogleSpreadsheet> = async () => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEETS_ID);
  await doc.useServiceAccountAuth(credential);
  await doc.loadInfo();
  return doc;
};

export default useGoogleSheet;
