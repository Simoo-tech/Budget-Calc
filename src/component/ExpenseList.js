import React from "react";
import Item from "./Expense";
import { BsTrash } from "react-icons/bs";
export const ExpenseList = ({
  expenses,
  clearItems,
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="delete" onClick={clearItems}>
          <BsTrash />
          clear expense
        </button>
      )}
    </>
  );
};
