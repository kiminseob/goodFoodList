import React from 'react';
import Map from 'components/common/Map';
import { TelIcon, AddressIcon, TimerIcon } from 'icons';
import { Typograpy } from 'components/common/Element';
import { ShopDetailType } from 'types/shopDetail';

function ShopDetail({ detail }: { detail: ShopDetailType }) {
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
    <>
      <Map items={detail} />
      <div className="detail-contents">
        <Typograpy type="h2" value={name} />
      </div>
      <div className="detail-contents">
        <div>
          <AddressIcon />
          {address}
        </div>
        <div>
          <TelIcon />
          {tel ?? '정보 없음'}
        </div>
        <div>
          <TimerIcon />
          {bizhourInfo ?? '정보 없음'}
        </div>
        <pre>{description}</pre>
      </div>
    </>
  );
}

export default ShopDetail;
