import { createSlice } from "@reduxjs/toolkit";

const expenses = createSlice({
  name: "transactions",
  initialState: [
    {
      id: "1",
      title: "tea expenses",
      amount: 30,
    },
    {
      id: "2",
      title: "rent expenses",
      amount: -1400,
    },
    {
      id: "3",
      title: "fuel expense",
      amount: 5000,
    },
  ],
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        id: Date.now(),
        title: action.payload.title,
        amount: action.payload.amount,
      };
      state.push(newTransaction);
    },
    removeTransaction: (state, action) => {
      return state.filter(
        (transactions) => transactions.id !== action.payload.id
      );
    },
  },
});

export const { addTransaction, removeTransaction } = expenses.actions;

export default expenses.reducer;
