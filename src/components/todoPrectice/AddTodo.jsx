import React, { useState } from "react";

function AddTodo({ handleAddButton }) {
  let [todoInputVal, setTodoInputVal] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handleInputVal = (e) => {
    setTodoInputVal(e.target.value);
  };
  const handleDateInputVal = (e) => {
    setTodoDate(e.target.value);
  };

  return (
    <div className="m-auto">
      <div className="row">
        <div className="col-5">
          <input
            className="w-100"
            type="text"
            name=""
            id=""
            placeholder="Enter Todo Here"
            onChange={handleInputVal}
            value={todoInputVal}
          />
        </div>
        <div className="col-5">
          <input
            type="date"
            className=""
            value={todoDate}
            onChange={handleDateInputVal}
          />
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              handleAddButton(todoInputVal, todoDate);
              setTodoInputVal("");
              setTodoDate("");
            }}
            className="btn btn-success "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
