import React from 'react';
import ShopDetail from './ShopDetail';
import ExpenseDetail from './ExpenseDetail';
import RegisterExpense from './RegisterExpense';
function DetailView({ detail, sheetFn }: any) {
  return (
    <>
      <ShopDetail detail={detail} />
      <ExpenseDetail detail={detail} />
      <RegisterExpense detail={detail} sheetFn={sheetFn} />
    </>
  );
}

export default DetailView;
