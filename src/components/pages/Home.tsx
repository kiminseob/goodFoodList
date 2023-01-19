import React from 'react';
import Layout from 'components/common/Layout';
import Card from 'components/common/Card';
import { cards } from 'constants/data';

function Home() {
  const cardList = cards.map((card) => <Card card={card} />);
  return (
    <Layout>
      <div className="card-list-container">
        <div className="card-list">{cardList}</div>
      </div>
    </Layout>
  );
}

export default Home;
