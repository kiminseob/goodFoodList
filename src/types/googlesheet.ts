import type { GoogleSpreadsheetRow } from 'google-spreadsheet';

type AddsheetRows = (values: {
  [header: string]: string | number | boolean;
}) => Promise<GoogleSpreadsheetRow | undefined>;

type UpdateSheetRows = (
  rowIndex: number,
  updatedValue: string | Record<string, string>,
  header?: string
) => Promise<void>;

export type SheetFn = {
  addSheetRows: AddsheetRows;
  updateSheetRows: UpdateSheetRows;
};
