import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
  const history = useHistory();

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
