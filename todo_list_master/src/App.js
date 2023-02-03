import React, { Fragment, useCallback, useRef, useState } from "react";
import TodoAdd from "./Component/TodoAdd";
import TodoListTemplate from "./Component/TodoListTemplate";
import TodoList from "./Component/TodoList";
import Modal from "./Component/Modal";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      checked: true,
      star: false,
    },
    {
      id: 2,
      text: "도서관가서 책 빌리기",
      checked: true,
      star: false,
    },
    {
      id: 3,
      text: "방 청소하기",
      checked: false,
      star: true,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextID = useRef(4);

  const onAdd = useCallback(
    (text) => {
      if (text === "") {
        openModal();
      } else {
        const todo = {
          id: nextID.current++,
          text,
          checked: false,
        };
        setTodos(todos.concat(todo));
      }
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onCheck = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onImportent = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, star: !todo.star } : todo
        )
      );
    },
    [todos]
  );

  return (
    <Fragment>
      <Modal open={modalOpen} close={closeModal} header="경고">
        추가하실 내용을 입력하세요.
      </Modal>

      <TodoListTemplate>
        <TodoAdd onAdd={onAdd} />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onCheck={onCheck}
          onImportent={onImportent}
        />
      </TodoListTemplate>
    </Fragment>
  );
};
export default App;
