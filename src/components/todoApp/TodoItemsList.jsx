import React, { useContext } from "react";
import { TodoContextStore } from "../store/todo-context-store";

function TodoItemsList() {
  const {todoItems, handleDelItem} = useContext(TodoContextStore);
  return (
    <>
      <div className="container">
      {todoItems.length === 0 && <h3>Enjoy your day</h3> }
        {todoItems.map((item, index) => (
          <div key={index} className="d-flex justify-content-center gap-5 mt-3">
            <div className="">
              <h1>{item}</h1>
            </div>
            <button
              className="btn btn-danger ps-4 pe-4"
              onClick={() => handleDelItem(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoItemsList;
