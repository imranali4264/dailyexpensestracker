import React from "react";

export default function Transaction() {
  return (
    <li className="plus transaction-item">
      <span>test</span>
      <span>100</span>
      <button onClick={() => alert("test")} className="remove-btn">
        remove
      </button>
    </li>
  );
}
