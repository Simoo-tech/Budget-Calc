import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
const Expenseitem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, amount } = expense;

  return (
    <li key={id} className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span>${amount}</span>
        <div>
          <button
            className="edit-btn"
            aria-label="edit button"
            onClick={() => handleEdit(id)}
          >
            {<AiTwotoneEdit />}
          </button>
          <button
            className="delete-btn"
            aria-label="delete button"
            onClick={() => handleDelete(id)}
          >
            {<BsTrash />}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Expenseitem;
