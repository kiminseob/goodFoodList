import React from 'react';
import { useParams } from 'react-router-dom';
import useGoogleSheet from 'libs/googlesheet';
import DetailView from 'components/views/DetailView';
import ExpenseDetail from 'components/views/DetailView/ExpenseDetail';

type Params = {
  shopId: string;
};

function ShopDetailPage() {
  const { shopId } = useParams<Params>();
  const [sheetRows] = useGoogleSheet(0);
  const detail = sheetRows.filter((row, i) => row.id === shopId)[0];

  if (!detail) return null;

  return (
    <div className="detail-container">
      <DetailView detail={detail} />
      <ExpenseDetail />
    </div>
  );
}

export default ShopDetailPage;
