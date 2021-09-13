import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
  const history = useHistory();

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>{" "}
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
            history.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default connect()(AddExpensePage);
