import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { open, close, header } = props;
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button onClick={close}>&times;</button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button onClick={close}>닫기</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
