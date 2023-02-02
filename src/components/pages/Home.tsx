import React from 'react';
import Card from 'components/common/Card';
import goodFoodLists from 'db/goodFoodLists.json';

function Home() {
  const cardList = goodFoodLists.map((card, i) => (
    <Card key={card.id} card={card} />
  ));
  return (
    <div className="card-list-container">
      <div className="card-list">{cardList}</div>
    </div>
  );
}

export default Home;
