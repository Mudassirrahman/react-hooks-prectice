import React, { useState } from "react";
import Todo from "./Todo"
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"

function TodoApp() {
  let [todoItems, setTodoItems] = useState([]);

  const handleAddButton = (todoName, todoDate) => {
    const newTodoItem = [...todoItems, { name: todoName, date: todoDate }];
    setTodoItems(newTodoItem);
  };

  let handleDelButton = (todoItemName) => {
    const newTodoList = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoList);
  };

  return (
    <div className="container">
      <Todo />
      <AddTodo handleAddButton={handleAddButton} />
      {todoItems.length === 0 && <p>Enjoy your day</p>}
      <TodoItem todoitems={todoItems} handleDelButton={handleDelButton} />
    </div>
  );
}

export default TodoApp;