import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
  const history = useHistory();

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
          history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
