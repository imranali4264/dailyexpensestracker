import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../reducers/expenses";

export default configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
