import * as React from 'react';
import Map from 'components/common/Map';
import shopDetail from 'constants/data/cardDetail';
import { useParams } from 'react-router-dom';

type Params = {
  shopId: string;
};

function ShopDetailPage() {
  const { shopId } = useParams<Params>();
  const detail = shopDetail(shopId!);

  if (!detail) return null;

  const { title, address } = detail;

  return (
    <>
      <Map detail={detail} />
    </>
  );
}

export default ShopDetailPage;
