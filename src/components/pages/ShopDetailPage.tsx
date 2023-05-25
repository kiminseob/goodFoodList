import React from 'react';
import { useParams } from 'react-router-dom';
import useGoogleSheet from 'libs/googlesheet';
import ShopDetailView from 'components/views/ShopDetailView';
import { observer } from 'mobx-react';
import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';

type Params = {
  shopId: string;
};

function ShopDetailPage() {
  const { shopId } = useParams<Params>();
  const [shopSheetRows, sheetFn] = useGoogleSheet(SHEET_TITLE.ALL);
  const [expenseSheetRows] = useGoogleSheet(SHEET_TITLE.EXPENSE);
  const [reviewSheetRows] = useGoogleSheet(SHEET_TITLE.REVIEW);

  const detail = shopSheetRows.filter((row) => row.id === shopId)[0];
  const expense = expenseSheetRows.filter((row) => row.shopId === shopId);
  const review = reviewSheetRows.filter((row) => row.shopId === shopId);

  if (!detail || !expense) return null;

  return (
    <div className="detail-container">
      <ShopDetailView
        detail={detail}
        expense={expense}
        review={review}
        sheetFn={sheetFn}
      />
    </div>
  );
}

export default observer(ShopDetailPage);
