import React from "react";
import Transaction from "./Transaction";

export default function TransactionList() {
  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul className="list">
        <Transaction />
      </ul>
    </div>
  );
}
