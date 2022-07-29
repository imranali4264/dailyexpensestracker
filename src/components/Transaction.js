import React from "react";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../reducers/expenses";

export default function Transaction({ id, title, amount }) {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeTransaction({ id: id }));
  };

  return (
    <li className={`${amount > 0 ? "income" : "expense"} transaction-item`}>
      <span>{title}</span>
      <span>{amount}</span>
      <button onClick={() => onClickRemove()} className="remove-btn">
        remove
      </button>
    </li>
  );
}
