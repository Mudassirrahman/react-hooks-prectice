import React from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import TodoContextProvider from "../../store/todo-context-store.jsx";

function TodoMainAppContextApi() {
  return (
    <TodoContextProvider>
      <div
        className="App"
        style={{
          textAlign: "center",
          border: "1px solid gray",
          width: "50%",
          minWidth: "380px",
          margin: "16px auto",
        }}
      >
        <h1 className="mt-3"> TODO App Mobile Editor Code </h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}
export default TodoMainAppContextApi;
