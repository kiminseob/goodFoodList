import { GoogleSpreadsheetRow } from 'google-spreadsheet';

export type ShopDetailType = GoogleSpreadsheetRow & {
  tel: string;
  category: string;
  id: string;
  name: string;
  keywords: string;
  address: string;
  bizhourInfo: string;
  description: string;
  imageURL: string;
  expense: string;
};
