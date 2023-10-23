import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formInput, setFormInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const expenseData = {
      title: formInput.title,
      amount: formInput.amount,
      date: new Date(formInput.date),
    };
    
    props.onSaveExpenseData(expenseData);

    setFormInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formInput.title}
            name="title"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={formInput.amount}
            name="amount"
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={formInput.date}
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
