import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const now = moment();
console.log(now.format());

const ExpenseForm = (props) => {
  const [state, setState] = useState({
    description: props.expense ? props.expense.description : "",
    note: props.expense ? props.expense.note : "",
    amount: props.expense ? props.expense.amount.toString() : "",
    createdAt: props.expense ? props.expense.createdAt : new Date(),

    error: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name);
    // console.log(value);
    if ((name === "amount" && value.match(/^\d{1,}(\.\d{0,2})?$/)) || !value) {
      setState({ ...state, [name]: value });
    } else if (name === "description" || name === "note") {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.elements.description.value === "" ||
      e.target.elements.amount.value === ""
    ) {
      setState({ ...state, error: "Please Provide Description and Ammount" });
    } else {
      setState({ ...state, error: "" });
      props.onSubmit({
        description: state.description,
        amount: parseFloat(state.amount),
        note: state.note,
        createdAt: state.createdAt.valueOf(),
      });
    }
  };
  return (
    <div>
      {state.error && <p>{state.error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          name="description"
          value={state.description}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          value={state.amount}
          onChange={handleInput}
        />

        <DatePicker
          selected={state.createdAt}
          onChange={(date) => setState({ ...state, createdAt: date })}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Add a note for your expense (optional) "
          name="note"
          value={state.note}
          onChange={handleInput}
        ></textarea>
        <button>{props.expense ? "Save Changes" : "Add Expense"}</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
