import React from "react";
import "./TodoListTemplate.scss";

const TodoListTemplate = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = [
    "JAN",
    "FAB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  console.log("TodoListTemplate");

  return (
    <div className="TodoListTemplate">
      <div className="app_header">
        <div className="data_area">
          <div className="left_col">
            <div className="day_area">{day}</div>
          </div>
          <div className="right_col">
            <div className="month_area">{month}</div>
            <div className="year_area">{year}</div>
          </div>
        </div>
        <div className="title">Todo List</div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default TodoListTemplate;
