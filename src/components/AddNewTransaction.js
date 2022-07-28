import React, { useState } from "react";

export default function AddNewTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h3>Add new transaction</h3>
      <div className="your-balance">
        <h4>Your Balance</h4>
        <h1>$21323</h1>
      </div>
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
