import React from 'react';
import Card from 'components/common/Card';
import useGoogleSheet from 'libs/googlesheet';

function Home() {
  const [sheetRows] = useGoogleSheet(0);
  const cardList = sheetRows.map((row, i) => <Card key={row.id} card={row} />);

  return (
    <div className="card-list-container">
      <div className="card-list">{cardList}</div>
    </div>
  );
}

export default Home;
