import React from 'react';
import { StarIcon } from 'icons';
import { Link } from 'react-router-dom';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';

type CardProps = {
  card: GoogleSpreadsheetRow;
};

const tagColors = ['yellow', 'blue', 'red'];

function Card({ card }: CardProps) {
  const { id, name, rating, category, imageURL, profile_image } = card;

  return (
    <div className="card-container">
      <div className="card">
        <img
          referrerPolicy="no-referrer"
          className="thumbnail"
          src={imageURL ?? 'images/shop.png'}
          alt="이미지 경로가 잘못되었습니다."
        />
        <div className="contents">
          <div className="major">
            <Link className="title" to={`/shop/${id}`} state={card}>
              {name}
            </Link>
            <span className="profile">
              <img src={profile_image} />
            </span>
          </div>

          <div className="rating">
            <StarIcon />
            <span>{rating ?? '평점 없음'}</span>
          </div>
          <div className="tag-container">
            {category.split(',').map((v: string, i: number) => (
              <div key={i} className={`tag ${tagColors[i % 3]}`}>
                <p>{v}</p>
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
