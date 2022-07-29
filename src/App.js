import "./assets/style.css";
import AddNewTransaction from "./components/AddNewTransaction";
import AllExpenses from "./components/AllExpenses";
import TransactionList from "./components/TransactionList";
import { useSelector } from "react-redux";

function App() {
  const transactions = useSelector((state) => state.transactions);
  const amounts = transactions.map((transaction) => transaction.amount);

  const totalAmount = amounts.reduce(
    (totalAmount, amount) => (totalAmount += amount),
    0
  );
  return (
    <div className="container">
      <h1>Daily Expenses Tracker</h1>
      <div className="your-balance">
        <h4>Your Balance</h4>
        <h1>${totalAmount}</h1>
      </div>
      <AllExpenses transactions={transactions} />
      <TransactionList transactions={transactions} />
      <AddNewTransaction />
    </div>
  );
}

export default App;
