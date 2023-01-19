import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

type Card = {
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
  const { thumbnail, title, rating, tags } = card;

  return (
    <div className="card-container">
      <div className="card">
        <div className="thumbnail">{thumbnail}</div>
        <div className="contents">
          <div className="title">{title}</div>
          <div className="rating">
            <FontAwesomeIcon
              style={{ color: '#FFBA00' }}
              icon={solid('star')}
            />
            <span>{rating}</span>
          </div>
          <div className="tag-container">
            {tags.map((tag, i) => (
              <div className={`tag ${tagColors[i]}`}>
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
