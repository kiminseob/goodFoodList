import React from 'react';
import ShopDetail from './Shop/ShopDetail';
import ExpenseDetail from './Expense/ExpenseDetail';
import ExpenseRegister from './Expense/ExpenseRegister';
import ReviewRegister from './Review/ReviewRegister';
import ReviewDetail from './Review/ReviewDetail';

function DetailView({ detail, expense, review, sheetFn }: any) {
  return (
    <>
      <ShopDetail detail={detail} />
      <ExpenseDetail expense={expense} />
      <ReviewDetail review={review} />
      <ExpenseRegister detail={detail} sheetFn={sheetFn} />
      <ReviewRegister detail={detail} sheetFn={sheetFn} />
    </>
  );
}

export default DetailView;
