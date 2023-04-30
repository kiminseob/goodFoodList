import React from 'react';
import { Label, Typograpy } from 'components/common/Element';
import { ShopDetailType } from 'types/shopDetail';

function ExpenseDetail({ detail }: { detail: ShopDetailType }) {
  const expense = JSON.parse(detail.expense ?? null);

  return (
    <div className="detail-contents">
      <Typograpy type="h2" value="지출 내역" />
      {expense && <Expense expense={expense} />}
    </div>
  );
}

function Expense(props: {
  expense: Array<{
    date: string;
    headcount: number;
    price: number;
    menu: string;
  }>;
}) {
  const { expense } = props;
  console.log(expense);

  return (
    <ul>
      <li className="expense-list">
        <Label value="날짜" />
        <Label value="인원" />
        <Label value="비용" />
        <Label value="메뉴" />
      </li>
      {expense.map(({ date, headcount, price, menu }) => {
        return (
          <li className="expense-list">
            <Typograpy type="p2" value={date} />
            <Typograpy type="p2" value={headcount + ' 명'} />
            <Typograpy
              type="p2"
              value={Number(price).toLocaleString('ko-KR') + ' 원'}
            />
            <Typograpy type="p2" value={menu} />
          </li>
        );
      })}
    </ul>
  );
}

export default ExpenseDetail;
