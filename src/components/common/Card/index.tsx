import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

type Card = {
  id: number;
  thumbnail: string;
  title: string;
  rating: number;
  tags: Array<string>;
};

type CardProps = {
  card: Card;
};

const tagColors = ['yellow', 'blue', 'red'];

function Card({ card }: CardProps) {
  const { id, thumbnail, title, rating, tags } = card;

  return (
    <div className="card-container">
      <div className="card">
        <img className="thumbnail" src={thumbnail} />
        <div className="contents">
          <Link className="title" to={`/shop/${id}`}>
            {title}
          </Link>
          <div className="rating">
            <FontAwesomeIcon
              style={{ color: '#FFBA00' }}
              icon={solid('star')}
            />
            <span>{rating}</span>
          </div>
          <div className="tag-container">
            {tags.map((tag, i) => (
              <div key={tag} className={`tag ${tagColors[i]}`}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-foundation"></div>
    </div>
  );
}

export default Card;
