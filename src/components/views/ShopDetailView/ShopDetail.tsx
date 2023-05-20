import React from 'react';
import Map from 'components/common/Map';
import { TelIcon, AddressIcon, TimerIcon } from 'icons';
import { Label, Typograpy } from 'components/common/Element';
import { ShopDetailType } from 'types/shopDetail';
import useGoogleSheet from 'libs/googlesheet';
import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';

const NO_INFO = '정보 없음';

function ShopDetail({ detail }: { detail: ShopDetailType }) {
  const [sheetRows] = useGoogleSheet(SHEET_TITLE.USER);
  const {
    name,
    tel,
    category,
    keywords,
    address,
    bizhourInfo,
    description,
    imageURL,
    userId,
    timeStamp,
  } = detail;
  const user = sheetRows.filter(({ id }) => id === userId)[0];

  return (
    <>
      <Map items={detail} />
      {user && (
        <div className="meta-info">
          <span className="profile">
            <img src={user.profile_image} />
          </span>
          <span className="nickname">
            <Typograpy type="p2" value={`${user.nickname}님`} />
          </span>
          <span>({timeStamp})</span>
        </div>
      )}
      <div className="detail-contents">
        <Typograpy type="h2" value={name} />
      </div>
      <div className="detail-contents">
        <div>
          <AddressIcon />
          {address || NO_INFO}
        </div>
        <div>
          <TelIcon />
          {tel || NO_INFO}
        </div>
        <div>
          <TimerIcon />
          {bizhourInfo || NO_INFO}
        </div>
        <pre>{description}</pre>
      </div>
    </>
  );
}

export default ShopDetail;
