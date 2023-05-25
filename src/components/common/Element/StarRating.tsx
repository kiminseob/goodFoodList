import React from 'react';
import { StarIcon } from 'icons';

type StarRatingProps = {
  rating: number;
  handleRating?: (rating: number) => void;
  style?: React.CSSProperties;
};

function StarRating(props: StarRatingProps) {
  const { rating, handleRating = () => {}, style = {} } = props;

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <span onClick={() => handleRating(index + 1)}>
          <StarIcon
            id="rating"
            key={index}
            style={{
              width: '2rem',
              height: '2rem',
              color: '#ffba00',
              cursor: 'pointer',
              ...style,
            }}
            isregular={String(index >= rating)}
          />
        </span>
      ))}
    </div>
  );
}

export default StarRating;
