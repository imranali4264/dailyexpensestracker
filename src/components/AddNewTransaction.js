import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../reducers/expenses";

export default function AddNewTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        title: title,
        amount: +amount,
      })
    );
    setTitle("");
    setAmount(0);
  };
  return (
    <div className="container">
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Please Enter Transaction Name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Please Enter Amount"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
