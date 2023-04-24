import React from "react";
import { AiOutlineSend } from "react-icons/ai";
export const ExpenseForm = ({
  charge,
  amount,
  handleSubmit,
  handleAmount,
  handleCharge,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="charge">
        <label htmlFor="charge">Charge</label>
        <input
          type="text"
          name="charge"
          id="charge"
          placeholder="e.g rent"
          value={charge}
          onChange={handleCharge}
        />
      </div>
      <div className="amount">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="e.g 100"
          value={amount}
          onChange={handleAmount}
        />
      </div>
      <button type="submit">
        {edit ? "Edit" : "Submit"} <AiOutlineSend />
      </button>
    </form>
  );
};
