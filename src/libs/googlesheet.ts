import { useEffect } from 'react';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { SheetFn } from 'types/googlesheet';
import useStore from 'hooks/useStore';
import type { SheetTitleValue } from 'types/googlesheet';
type useGoogleSheetReturnType = [GoogleSpreadsheetRow[], SheetFn];

const useGoogleSheet = (
  sheetTitle: SheetTitleValue
): useGoogleSheetReturnType => {
  const { googlesheetStore } = useStore();
  const {
    sheetRows,
    isLoading,
    fetchGoogleSheetRows,
    addSheetRows,
    updateSheetRows,
  } = googlesheetStore;

  useEffect(() => {
    fetchGoogleSheetRows(sheetTitle);
  }, []);

  return [
    sheetRows[sheetTitle],
    {
      addSheetRows,
      updateSheetRows,
      isLoading: isLoading[sheetTitle],
    },
  ];
};

export default useGoogleSheet;
