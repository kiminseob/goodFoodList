import type { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';

export type SheetTitleType = typeof SHEET_TITLE;

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
