import React, { useState, useEffect } from "react";
import "./App.css";
import { Alert } from "./component/Alert";
import { ExpenseForm } from "./component/ExpenseForm";
import { ExpenseList } from "./component/ExpenseList";
import { v4 as uuid } from "uuid";

const intialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  //********* State value ******* */
  const [expenses, setExpense] = useState(intialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setid] = useState();
  // ************useEffect************* /
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // ************Functionality************* /
  // Handle Charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  // Handle Amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  // Handle Alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempex = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpense(tempex);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpense([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item add " });
      }
      setAmount("");
      setCharge("");
    } else {
      handleAlert({ type: "danger", text: "You have to add an item " });
    }
  };
  // clear all items
  const clearItems = () => {
    setExpense([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  };
  // Handle Delete
  const handleDelete = (id) => {
    let tempex = expenses.filter((item) => item.id !== id);
    setExpense(tempex);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  // Handle edit
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setid(id);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
        <h1 className="total">
          total spending :
          <span className="total">
            $
            {expenses.reduce((acc, curr) => {
              return acc + parseInt(curr.amount);
            }, 0)}
          </span>
        </h1>
      </main>
    </>
  );
}

export default App;
