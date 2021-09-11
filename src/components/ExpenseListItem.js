import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExpenseListItem = ({  description, amount, createdAt, id }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
      </p>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseListItem);
