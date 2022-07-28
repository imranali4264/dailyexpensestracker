import React from "react";

export default function AllExpenses() {
  return (
    <div className="expensesContainer">
      <div>
        <h4>Income</h4>
        <p className="amount plus">321</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="amount minus">234</p>
      </div>
    </div>
  );
}
