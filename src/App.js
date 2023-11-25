import React from "react";
import TodoMainApp from "./components/todoApp/TodoMainApp";
import CalculMainApp from "./components/calculator/CalculMainApp";
import FormAppWithUseRef from "./components/form/FormAppWithUseRef";
import FormAppWithUseState from "./components/form/FormAppWithUseState";
import TodoMainAppContextApi from "./components/todo-context-api/TodoMainAppContextApi";

function App() {
  return (
    <>
      <TodoMainApp />
      <CalculMainApp />
      <FormAppWithUseRef />
      <FormAppWithUseState />
      <TodoMainAppContextApi />

    </>
  );
}

export default App;
