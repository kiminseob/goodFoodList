import React from 'react';
import Map from 'components/common/Map';
import { useParams } from 'react-router-dom';
import useGoogleSheet from 'libs/googlesheet';

type Params = {
  shopId: string;
};

function ShopDetailPage() {
  const { shopId } = useParams<Params>();
  const [sheetRows] = useGoogleSheet(0);
  const detail = sheetRows.filter((row, i) => row.id === shopId)[0];

  if (!detail) return null;

  return (
    <div>
      <div style={{ width: '517px', height: '517px', margin: 'auto' }}>
        <Map items={detail} />
      </div>
      {<DetailView detail={detail} />}
    </div>
  );
}

function DetailView({ detail }: any) {
  const {
    name,
    tel,
    category,
    keywords,
    address,
    bizhourInfo,
    description,
    imageURL,
  } = detail;

  return (
    <div className="detail-container">
      <div>{name}</div>
      <div>{address}</div>
      <div>{tel}</div>
      <div>{bizhourInfo}</div>
      <pre>{description}</pre>
    </div>
  );
}

export default ShopDetailPage;
