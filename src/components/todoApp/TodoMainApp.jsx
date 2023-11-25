import React, { useContext } from "react";
import TodoAppHeading from "./TodoAppHeading";
import TodoInput from "./TodoInput";
import TodoItemsList from "./TodoItemsList";
import { TodoContextStore, TodoItemsContextProvider } from "../store/todo-context-store";


function TodoMainApp() {
  const {todoItems} = useContext(TodoContextStore);
  return (
    <>
     <TodoItemsContextProvider>
        <div className="text-center container">
          <TodoAppHeading />
          <TodoInput />
          <TodoItemsList />
        </div>
        </TodoItemsContextProvider>
    </>
  );
}

export default TodoMainApp;
