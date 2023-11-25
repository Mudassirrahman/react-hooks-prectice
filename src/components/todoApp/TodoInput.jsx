import React, { useContext, useState } from "react";
import { TodoContextStore } from "../store/todo-context-store";

function TodoInput() {
  let [inpval, setInpVal] = useState("");
  const {addInputItem} = useContext(TodoContextStore)

  const handleInput = (e) => {
    e.preventDefault();
    setInpVal(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center gap-4">
      <input type="text" onChange={handleInput} value={inpval} />
      <button
        className="btn btn-primary"
        onClick={() => {
          addInputItem(inpval);
          setInpVal("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default TodoInput;
