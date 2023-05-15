import React from 'react';
import { observer } from 'mobx-react';
import Card from 'components/common/Card';
import useGoogleSheet from 'libs/googlesheet';

function HomePage() {
  const [sheetRows] = useGoogleSheet(0);

  const cardList = sheetRows.map((row) => <Card key={row.id} card={row} />);

  return (
    <div className="card-list-container">
      <div className="card-list">{cardList}</div>
    </div>
  );
}

export default observer(HomePage);
