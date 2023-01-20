import React from 'react';
import Card from 'components/common/Card';
import { cards } from 'constants/data';

function Home() {
  const cardList = cards.map((card, i) => <Card key={card.id} card={card} />);
  return (
    <div className="card-list-container">
      <div className="card-list">{cardList}</div>
    </div>
  );
}

export default Home;
