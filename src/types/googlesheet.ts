import type { GoogleSpreadsheetRow } from 'google-spreadsheet';

export type SheetTitleType = { ALL: 'All'; EXPENSE: 'Expense'; USER: 'User' };
export type SheetTitleValue = SheetTitleType[keyof SheetTitleType];

export type AddsheetRows = (
  sheetTitle: SheetTitleValue,
  values: { [header: string]: string | number | boolean }
) => Generator<
  Promise<GoogleSpreadsheetRow> | undefined,
  GoogleSpreadsheetRow,
  GoogleSpreadsheetRow
>;

type UpdateSheetRows = (
  sheetTitle: SheetTitleValue,
  rowIndex: number,
  updatedValue: string | Record<string, string>,
  header?: string | undefined
) => Generator<Promise<void>, void, unknown>;

export type SheetFn = {
  addSheetRows: AddsheetRows;
  updateSheetRows: UpdateSheetRows;
  isLoading: boolean;
};
