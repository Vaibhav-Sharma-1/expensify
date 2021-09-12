import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = (props) => {
  const history = useHistory();
  console.log(props);
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }));
          history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
