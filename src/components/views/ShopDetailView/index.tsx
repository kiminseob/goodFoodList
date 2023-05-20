import React from 'react';
import ShopDetail from './ShopDetail';
import ExpenseDetail from './ExpenseDetail';
import RegisterExpense from './RegisterExpense';

function DetailView({ detail, expense, sheetFn }: any) {
  return (
    <>
      <ShopDetail detail={detail} />
      <ExpenseDetail expense={expense} />
      <RegisterExpense detail={detail} sheetFn={sheetFn} />
    </>
  );
}

export default DetailView;
