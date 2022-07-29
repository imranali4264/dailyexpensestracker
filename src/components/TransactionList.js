import React from "react";
import Transaction from "./Transaction";

export default function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => {
          return (
            <Transaction id={item.id} title={item.title} amount={item.amount} />
          );
        })}
      </ul>
    </div>
  );
}
