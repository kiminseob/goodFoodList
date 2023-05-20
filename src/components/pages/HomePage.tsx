import React from 'react';
import { observer } from 'mobx-react';
import Card from 'components/common/Card';
import useGoogleSheet from 'libs/googlesheet';
import { GhostIcon } from 'icons';
import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';

function HomePage() {
  const [sheetRows, { isLoading }] = useGoogleSheet(SHEET_TITLE.ALL);

  const cardList = sheetRows.map((row) => <Card key={row.id} card={row} />);

  return (
    <div className="card-list-container">
      <div className="card-list">{cardList}</div>
      {isLoading && 'loading...'}
      {!isLoading && cardList.length === 0 && (
        <div className="empty-data">
          <GhostIcon /> <span>No Data!</span>
        </div>
      )}
    </div>
  );
}

export default observer(HomePage);
