import React from "react";

export default function AllExpenses({ transactions }) {
  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((sum, item) => (sum += item));

  console.log(amount);
  const expenses = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  console.log(expenses);

  return (
    <div className="expensesContainer">
      <div>
        <h4>Income</h4>
        <p className="amount income">${income}.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="amount expense">${expenses}.00</p>
      </div>
    </div>
  );
}
