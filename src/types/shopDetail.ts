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

export type ShopExpenseType = GoogleSpreadsheetRow & {
  shopId: number;
  userId: number;
  name: string;
  nickname: string;
  profile_image: string;
  timeStamp: string;
  date: string;
  headcount: number;
  price: number;
  menu: string;
};

export type ShopReviewType = GoogleSpreadsheetRow & {
  shopId: number;
  userId: number;
  name: string;
  nickname: string;
  profile_image: string;
  timeStamp: string;
  rating: number;
  review: string;
};
