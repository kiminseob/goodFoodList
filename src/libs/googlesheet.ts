import { useEffect } from 'react';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { SheetFn } from 'types/googlesheet';
import useStore from 'hooks/useStore';

type useGoogleSheetReturnType = [GoogleSpreadsheetRow[], SheetFn];

const useGoogleSheet = (sheetId: number): useGoogleSheetReturnType => {
  const { GooglesheetStore } = useStore();
  const { sheetRows, fetchGoogleSheetRows, addSheetRows, updateSheetRows } =
    GooglesheetStore;

  useEffect(() => {
    fetchGoogleSheetRows(sheetId);
  }, []);

  return [
    sheetRows,
    {
      addSheetRows,
      updateSheetRows,
    },
  ];
};

export default useGoogleSheet;
