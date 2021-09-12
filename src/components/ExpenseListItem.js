import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import formatAmount from "indian-currency-formatter";

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
      ₹{formatAmount(amount)} -{" "}
        {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default ExpenseListItem;
