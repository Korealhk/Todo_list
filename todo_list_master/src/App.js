import React, { useCallback, useRef, useState } from "react";
import TodoAdd from './Component/TodoAdd';
import TodoListTemplate from './Component/TodoListTemplate';
import TodoList from "./Component/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부하기',
      checked: true,
      star: false,
    },
    {
      id: 2,
      text: '도서관가서 책 빌리기',
      checked: true,
      star: false,
    },
    {
      id: 3,
      text: '방 청소하기',
      checked: false,
      star: true,
    },
  ]);

  const nextID = useRef(4);

  const onAdd = useCallback( text => {
    const todo ={
      id : nextID.current,
      text,
      checked : false,
    };
    setTodos(todos.concat(todo));
  },
  [todos]
  );
  
  const onRemove = useCallback();
  const onCheck = useCallback();
  const onImportent = useCallback();

  console.log("App");
  console.log(todos);
  return (
    <TodoListTemplate>
      <TodoAdd onAdd={onAdd}/>
      <TodoList 
        todos={todos}
        onRemove={onRemove}
        onCheck={onCheck}
        onImportent={onImportent}
      />
    </TodoListTemplate>
  );
};
export default App;
