import React from 'react';
import Map from 'components/common/Map';
import { TelIcon, AddressIcon, TimerIcon } from 'icons';

function ShopDetail({ detail }: any) {
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
        <h2>{name}</h2>
      </div>
      <div className="detail-contents">
        <div>
          <AddressIcon />
          {address}
        </div>
        <div>
          <TelIcon />
          {tel}
        </div>
        <div>
          <TimerIcon />
          {bizhourInfo}
        </div>
        <pre>{description}</pre>
      </div>
    </>
  );
}

export default ShopDetail;
