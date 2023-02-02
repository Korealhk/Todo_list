import React from "react";
import "./TodoListTemplate.scss";

const TodoListTemplate = ({ children }) => {
  return (
    <div className="TodoListTemplate">
      <div className="app_header">
        <div className="data_area">
          <div className="left_col">
            <div className="day_area">25</div>
          </div>
          <div className="right_col">
            <div className="month_area">7</div>
            <div className="year_area">2023</div>
          </div>
        </div>
        <div className="title">Todo List</div>
      </div>
      <div className="">어쩌구 저쩌구...</div>
    </div>
  );
};


export default TodoListTemplate;