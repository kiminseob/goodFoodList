import React from 'react';
import { useParams } from 'react-router-dom';
import useGoogleSheet from 'libs/googlesheet';
import DetailView from 'components/views/DetailView';

type Params = {
  shopId: string;
};

function ShopDetailPage() {
  const { shopId } = useParams<Params>();
  const [sheetRows, sheetFn] = useGoogleSheet(0);
  const detail = sheetRows.filter((row, i) => row.id === shopId)[0];

  if (!detail) return null;

  return (
    <div className="detail-container">
      <DetailView detail={detail} sheetFn={sheetFn} />
    </div>
  );
}

export default ShopDetailPage;
