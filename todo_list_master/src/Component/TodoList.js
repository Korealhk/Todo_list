import React from "react";
import "./TodoList.scss";
import TodoObject from "./TodoObject";

const TodoList = ({ todos, onRemove , onImportent, onCheck}) => {

    console.log("TodoList");
    console.log(todos);
    return (
        <div className="TodoList">
            {todos.map(todo =>(
                <TodoObject
                todo = {todo}
                key = {todo.id}
                onRemove = {onRemove}
                onCheck = {onCheck}
                onImportent = {onImportent}
                />
            ))}
        </div>
    );
};


export default TodoList;