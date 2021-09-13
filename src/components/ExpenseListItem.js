import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import formatAmount from "indian-currency-formatter";

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">
          {moment(createdAt).format("MMMM Do, YYYY")}
        </span>
      </div>
      <h3 className="list-item__data"> ₹{formatAmount(amount)}</h3>
    </Link>
  );
};

export default ExpenseListItem;
