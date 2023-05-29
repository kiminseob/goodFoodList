import React from 'react';
import { Label, Typograpy } from 'components/common/Element';
import { ShopExpenseType } from 'types/shopDetail';
import useResizeEvent from 'hooks/useResizeEvent';

function ExpenseDetail({ expense }: { expense: ShopExpenseType[] }) {
  const hasExpense = Boolean(expense.length);

  return (
    <>
      <div className="detail-contents">
        <Typograpy type="h2" value="지출 내역" />
      </div>
      <div className={`detail-contents ${!hasExpense && 'disabled'}`}>
        {!hasExpense && '지출 내역이 없습니다.'}
        {hasExpense && <Expense expense={expense} />}
      </div>
    </>
  );
}

function Expense({ expense }: { expense: ShopExpenseType[] }) {
  const width = useResizeEvent();

  return width > 600 ? (
    <ExpenseListDesktop expense={expense} />
  ) : (
    <ExpenseListMobile expense={expense} />
  );
}

function ExpenseListDesktop({ expense }: { expense: ShopExpenseType[] }) {
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
              <Typograpy type="pre" value={menu} />
            </li>
          );
        }
      )}
    </ul>
  );
}

function ExpenseListMobile({ expense }: { expense: ShopExpenseType[] }) {
  return (
    <ul>
      <li className="expense-list mobile">
        <Label className="writer" value="작성자" />
        <Label className="headcount-price" value="인원/비용" />
        <Label className="menu" value="메뉴" />
      </li>
      {expense.map(
        ({ profile_image, nickname, date, headcount, price, menu }, i) => {
          return (
            <li key={i} className="expense-list mobile">
              <div>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="profile">
                    <img src={profile_image} />
                  </span>
                  <span className="nickname">
                    <Typograpy type="p2" value={`${nickname}님`} />
                  </span>
                </span>
                <Typograpy type="p2" value={date} />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typograpy type="p2" value={headcount + ' 명 /'} />
                <Typograpy type="p2" value={price + ' 원'} />
              </div>
              <Typograpy type="pre" value={menu} />
            </li>
          );
        }
      )}
    </ul>
  );
}

export default ExpenseDetail;
