import React from 'react';
import { Label, Typograpy } from 'components/common/Element';
import { ShopExpenseType } from 'types/shopDetail';

function ExpenseDetail({ expense }: { expense: ShopExpenseType[] }) {
  return (
    <>
      <div className="detail-contents">
        <Typograpy type="h2" value="지출 내역" />
      </div>
      <div className="detail-contents">
        {expense && <Expense expense={expense} />}
      </div>
    </>
  );
}

function Expense({ expense }: { expense: ShopExpenseType[] }) {
  return (
    <ul>
      <li className="expense-list">
        <Label value="작성자" />
        <Label value="날짜" />
        <Label value="인원" />
        <Label value="비용" />
        <Label value="메뉴" />
      </li>
      {expense.map(
        ({ profile_image, nickname, date, headcount, price, menu }, i) => {
          return (
            <li key={i} className="expense-list">
              <div>
                <span className="profile">
                  <img src={profile_image} />
                </span>
                <span className="nickname">
                  <Typograpy type="p2" value={`${nickname}님`} />
                </span>
              </div>
              <Typograpy type="p2" value={date} />
              <Typograpy type="p2" value={headcount + ' 명'} />
              <Typograpy type="p2" value={price + ' 원'} />
              <Typograpy type="p2" value={menu} />
            </li>
          );
        }
      )}
    </ul>
  );
}

export default ExpenseDetail;
