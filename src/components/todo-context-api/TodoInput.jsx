import { useState, useContext } from "react";
import { TodoContext } from "../../store/todo-context-store.jsx";
function TodoInput() {
  let [inpVal, setInpVal] = useState("");
  let handleInput = (e) => {
    e.preventDefault();
    setInpVal(e.target.value);
  };
  const handleAddTodo = () => {
    handleTodoInput(inpVal);
    setInpVal("");
  };
  const { handleTodoInput } = useContext(TodoContext);
  return (
    <>
      <input
        style={{
          minWidth: "350px",
          lineHeight: "36px",
          margin: "8px 0",
        }}
        type="text"
        placeholder="Enter Todo Here"
        value={inpVal}
        onChange={handleInput}
      />
      <button className="btn btn-primary" onClick={handleAddTodo}>
        add
      </button>
    </>
  );
}
export default TodoInput;
