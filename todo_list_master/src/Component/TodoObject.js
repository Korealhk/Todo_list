import React from "react";
import "./TodoObject.scss";
import cn from "classnames";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdStar,
} from "react-icons/md";

const TodoObject = ({ todo, onRemove, onCheck, onImportent }) => {
  const { id, text, checked, star } = todo;

  console.log("todoObject");
  console.log(todo);
  return (
    <div className={cn("TodoObject", { star })}>
      <div className={cn("checkbox", { checked })} onClick={() => onCheck(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className={cn("importent", { star })}
        onClick={() => onImportent(id)}
      >
        <MdStar />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoObject;
