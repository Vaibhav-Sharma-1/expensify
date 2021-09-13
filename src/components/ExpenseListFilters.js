import React, { useState } from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";

const ExpenseListFilters = (props) => {
  const [state, setState] = useState({
    calendarFocused: null,
  });
  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            placeholder="Search Expense here..."
            value={props.filters.text}
            className="text-input"
            onChange={(e) => {
              props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="input-group__item">
          <select
            className="select"
            value={props.filters.sortBy}
            onChange={(e) => {
              if (e.target.value === "date") {
                props.dispatch(sortByDate());
              } else if (e.target.value === "amount") {
                props.dispatch(sortByAmount());
              }
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>{" "}
        </div>
        <div className="input-group__item">
          <DateRangePicker
            startDate={props.filters.startDate}
            startDateId="#"
            endDate={props.filters.endDate}
            endDateId="#"
            onDatesChange={({ startDate, endDate }) => {
              props.dispatch(setStartDate(startDate));
              props.dispatch(setEndDate(endDate));
            }}
            focusedInput={state.calendarFocused}
            onFocusChange={(calendarFocused) =>
              setState({ ...state, calendarFocused })
            }
            isOutsideRange={() => false}
            numberOfMonths={1}
            showClearDates={true}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
