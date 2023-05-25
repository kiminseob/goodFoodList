import React, { useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowDownIcon,
  CircleCheckIcon,
  CircleAddIcon,
} from 'icons';
import { Label, StarRating } from 'components/common/Element';
import { error, info, success } from 'utils/toast';
import useStore from 'hooks/useStore';
import { SheetFn } from 'types/googlesheet';
import { ShopDetailType } from 'types/shopDetail';
import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';

function ReviewRegister({
  detail,
  sheetFn,
}: {
  detail: ShopDetailType;
  sheetFn: SheetFn;
}) {
  const { userInfoStore } = useStore();
  const { addSheetRows } = sheetFn;
  const [isExtend, setIsExtend] = useState(true);
  const [reviewForm, setReviewForm] = useState({
    rating: 1,
    review: '',
  });
  const isFulfilledForm = () => Object.values(reviewForm).every((v) => v);

  const handleClickExtend = () => {
    setIsExtend((prev) => !prev);
  };

  const handleRating = (rating: number) => {
    setReviewForm((prev) => ({ ...prev, rating }));
  };

  const handleReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewForm((prev) => ({ ...prev, review: e.target.value }));
  };

  const handleSubmitReview = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!userInfoStore.loginStatus) {
      return info('로그인을 먼저 해주세요.');
    }

    const isConfirm = confirm('리뷰를 등록합니다.');

    if (!isConfirm) return;

    try {
      const mergedForm = {
        shopId: detail.id,
        userId: userInfoStore.user.id,
        name: userInfoStore.user.name,
        nickname: userInfoStore.user.nickname,
        profile_image: userInfoStore.user.profile_image,
        ...reviewForm,
      };
      addSheetRows(SHEET_TITLE.REVIEW, mergedForm);
      success('리뷰를 등록하였습니다.');
    } catch (e) {
      error('리뷰 등록에 실패하였습니다.');
    }
  };

  return (
    <>
      <div className="detail-contents">
        리뷰 등록하기
        {isExtend ? (
          <ArrowDownIcon onClick={handleClickExtend} />
        ) : (
          <ArrowLeftIcon onClick={handleClickExtend} />
        )}
      </div>
      {isExtend && (
        <div className="detail-expense">
          <form className="form-container">
            <div className="submit-container">
              <div>
                <CircleAddIcon
                  disabled={!isFulfilledForm()}
                  onClick={handleSubmitReview}
                  beat={isFulfilledForm()}
                />
              </div>
            </div>
            <div>
              <div className="input-container">
                <Label value="별점" htmlFor="rating" />
                <StarRating
                  rating={reviewForm.rating}
                  handleRating={handleRating}
                />
              </div>
              <div className="input-container">
                <Label value="후기" htmlFor="review" />
                <textarea
                  onChange={handleReview}
                  id="review"
                  name="review"
                  value={reviewForm.review}
                  rows={5}
                  cols={30}
                  required
                />
                {reviewForm.review && <CircleCheckIcon />}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ReviewRegister;
