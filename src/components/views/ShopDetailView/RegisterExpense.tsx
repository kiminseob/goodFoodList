import React, { useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowDownIcon,
  CircleCheckIcon,
  CircleAddIcon,
} from 'icons';
import { Label, Input } from 'components/common/Element';
import { error, info, success } from 'utils/toast';
import { currentDate } from 'utils/date';
import useStore from 'hooks/useStore';
import { SheetFn } from 'types/googlesheet';
import { ShopDetailType } from 'types/shopDetail';
import { SHEET_TITLE } from 'store/Googlesheet/GooglesheetStore';
import useGoogleSheet from 'libs/googlesheet';

function RegisterExpense({
  detail,
  sheetFn,
}: {
  detail: ShopDetailType;
  sheetFn: SheetFn;
}) {
  const { userInfoStore } = useStore();
  const { addSheetRows } = sheetFn;
  const [isExtend, setIsExtend] = useState(false);
  const [expenseForm, setExpenseForm] = useState({
    date: currentDate(),
    headcount: '',
    price: '',
    menu: '',
  });
  const isFulfilledForm = () => Object.values(expenseForm).every((v) => v);
  const handleClickExtend = () => {
    setIsExtend((prev) => !prev);
  };

  const handleSubmitExpense = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!userInfoStore.loginStatus) {
      return info('로그인을 먼저 해주세요.');
    }

    const isConfirm = confirm('지출 내역을 등록합니다.');

    if (!isConfirm) return;

    try {
      const mergedForm = {
        shopId: detail.id,
        userId: userInfoStore.user.id,
        name: userInfoStore.user.name,
        nickname: userInfoStore.user.nickname,
        profile_image: userInfoStore.user.profile_image,
        ...expenseForm,
      };
      addSheetRows(SHEET_TITLE.EXPENSE, mergedForm);
      success('지출 내역을 등록하였습니다.');
    } catch (e) {
      error('지출 내역 등록에 실패하였습니다.');
    }
  };

  const handleExpenseForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'price' && /[^0-9\,]/.test(value)) return;

    setExpenseForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="detail-contents">
        지출 내역 등록하기
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
                  onClick={handleSubmitExpense}
                  beat={isFulfilledForm()}
                />
              </div>
            </div>
            <div>
              <div className="input-container">
                <Label value="날짜" htmlFor="date" />
                <Input
                  onChange={handleExpenseForm}
                  type="date"
                  id="date"
                  name="date"
                  value={expenseForm.date}
                  required
                />
                {expenseForm.date && <CircleCheckIcon />}
              </div>
              <div className="input-container">
                <Label value="인원" htmlFor="headcount" />
                <Input
                  onChange={handleExpenseForm}
                  type="number"
                  id="headcount"
                  name="headcount"
                  value={expenseForm.headcount}
                  min={0}
                  required
                />
                {expenseForm.headcount && <CircleCheckIcon />}
              </div>
              <div className="input-container">
                <Label value="비용" htmlFor="price" />
                <Input
                  onChange={handleExpenseForm}
                  type="text"
                  id="price"
                  name="price"
                  value={Number(
                    expenseForm.price.replaceAll(',', '')
                  ).toLocaleString('ko-KR')}
                  required
                />
                {expenseForm.price && <CircleCheckIcon />}
              </div>
              <div className="input-container">
                <Label value="메뉴" htmlFor="menu" />
                <textarea
                  onChange={handleExpenseForm}
                  id="menu"
                  name="menu"
                  value={expenseForm.menu}
                  rows={5}
                  cols={30}
                  required
                />
                {expenseForm.menu && <CircleCheckIcon />}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default RegisterExpense;
