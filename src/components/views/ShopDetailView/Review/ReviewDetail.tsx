import React from 'react';
import { Label, StarRating, Typograpy } from 'components/common/Element';
import { ShopReviewType } from 'types/shopDetail';
import useResizeEvent from 'hooks/useResizeEvent';

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
  const width = useResizeEvent();

  return (
    <ul>
      {review.map((_review, i) => {
        return width > 600 ? (
          <ReviewListDesktop i={i} review={_review} />
        ) : (
          <ReviewListMobile i={i} review={_review} />
        );
      })}
    </ul>
  );
}

function ReviewListDesktop({
  i,
  review,
}: {
  i: number;
  review: ShopReviewType;
}) {
  const { profile_image, nickname, rating, timeStamp } = review;

  return (
    <li key={i} className="review-list">
      <div>
        <StarRating rating={rating} style={{ width: '1rem', height: '1rem' }} />
        <span className="profile" style={{ marginLeft: '0.5rem' }}>
          <img src={profile_image} />
        </span>
        <span className="nickname">
          <Typograpy type="p2" value={`${nickname}님`} />
        </span>
        <Typograpy
          type="pre"
          value={review.review}
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

function ReviewListMobile({
  i,
  review,
}: {
  i: number;
  review: ShopReviewType;
}) {
  const { profile_image, nickname, rating, timeStamp } = review;

  return (
    <li key={i} className="review-list mobile">
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <span className="profile" style={{ marginLeft: '0.5rem' }}>
            <img src={profile_image} />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="nickname">
              <Typograpy type="p2" value={`${nickname}님`} />
            </span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <StarRating
                rating={rating}
                style={{ width: '1rem', height: '1rem' }}
              />
            </span>
          </span>
        </span>
        <Typograpy
          type="p2"
          value={timeStamp}
          style={{
            backgroundColor: 'gainsboro',
            borderRadius: '2rem',
            padding: ' 0.5rem',
          }}
        />
      </div>
      <div>
        <Typograpy
          type="pre"
          value={review.review}
          style={{ margin: '1rem 0 1rem 0.5rem' }}
        />
      </div>
    </li>
  );
}

export default ReviewDetail;
