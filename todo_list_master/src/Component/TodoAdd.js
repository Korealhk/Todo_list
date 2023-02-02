import React, { useCallback, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./TodoAdd.scss";

const TodoAdd = ({onAdd}) => {

    const [value, setValue] = useState("");

    const onChange = useCallback( e => {
        console.log(e.target.value);
        setValue(e.target.value);
    }, 
    [] 
    );

    const onSubmit = useCallback( e=> {
        console.log(e.tart.value);
        e.preventDefault();
        onAdd(value)
        setValue("");
    },
    [onAdd, value]
    );

    console.log("TodoAdd");
    return (
        <form className="TodoAdd" onSubmit={onSubmit}>
            <input 
                placeholder="추가"
                value = {value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAddCircleOutline />
            </button>
        </form>
    );
}


export default TodoAdd;