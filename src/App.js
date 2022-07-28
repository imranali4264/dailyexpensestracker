import "./assets/style.css";
import AddNewTransaction from "./components/AddNewTransaction";
import AllExpenses from "./components/AllExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="container">
      <h1>Daily Expenses Tracker</h1>
      <AllExpenses />
      <TransactionList />
      <AddNewTransaction />
    </div>
  );
}

export default App;
