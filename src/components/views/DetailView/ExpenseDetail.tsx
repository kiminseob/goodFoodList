import React, { useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowDownIcon,
  CircleCheckIcon,
  CircleAddIcon,
} from 'icons';
import { Label, Input } from 'components/common/Element';

function ExpenseDetail() {
  const currentDate = new Date()
    .toLocaleDateString()
    .replace(/\./g, '')
    .split(' ')
    .map((v: string, i) => (i > 0 && v.length < 2 ? '0' + v : v))
    .join('-');
  const [isExtend, setIsExtend] = useState(false);
  const [expenseForm, setExpenseForm] = useState({
    date: currentDate,
    headcount: '',
    price: '',
    menu: '',
  });
  const isFulfilledForm = () => Object.values(expenseForm).every((v) => v);
  const handleClickExtend = () => {
    setIsExtend((prev) => !prev);
  };

  const handleSubmitExpense = (e: React.MouseEvent<SVGSVGElement>) => {
    const { date, headcount, price, menu } = expenseForm;
    console.log(date, headcount, price, menu);
  };

  const handleExpenseForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
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
                <Label value="가격" htmlFor="price" />
                <Input
                  onChange={handleExpenseForm}
                  type="number"
                  id="price"
                  name="price"
                  value={expenseForm.price}
                  min={0}
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

function ExpenseInput(props: { expense: string[] }) {
  const { expense } = props;

  return (
    <ul>
      {expense.map((v) => {
        return v;
      })}
    </ul>
  );
}

export default ExpenseDetail;
