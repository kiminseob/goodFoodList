import React from 'react';
import { Label, StarRating, Typograpy } from 'components/common/Element';
import { ShopReviewType } from 'types/shopDetail';

function ReviewDetail({ review }: { review: ShopReviewType[] }) {
  const hasReview = Boolean(review.length);

  return (
    <>
      <div className="detail-contents">
        <Typograpy type="h2" value="리뷰" />
      </div>
      <div className={`detail-contents ${!hasReview && 'disabled'}`}>
        {!hasReview && '리뷰가 없습니다.'}
        {hasReview && <Review review={review} />}
      </div>
    </>
  );
}

function Review({ review }: { review: ShopReviewType[] }) {
  return (
    <ul>
      {review.map(
        ({ profile_image, nickname, rating, review, timeStamp }, i) => {
          return (
            <li key={i} className="review-list">
              <div>
                <StarRating
                  rating={rating}
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span className="profile" style={{ marginLeft: '0.5rem' }}>
                  <img src={profile_image} />
                </span>
                <span className="nickname">
                  <Typograpy type="p2" value={`${nickname}님`} />
                </span>
                <Typograpy
                  type="pre"
                  value={review}
                  style={{ marginLeft: '0.5rem' }}
                />
              </div>
              <Typograpy
                type="p2"
                value={timeStamp}
                style={{
                  backgroundColor: 'gainsboro',
                  borderRadius: '2rem',
                  padding: ' 0.5rem',
                }}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}

export default ReviewDetail;
