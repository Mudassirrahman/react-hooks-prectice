import { createContext, useState } from "react";

export const TodoContextStore = createContext({
  todoItems: [],
  addInputItem: () => {},
  handleDelItem: () => {},
});

export const TodoItemsContextProvider = ({ children }) => {
  let [todoItems, setTodoItems] = useState([]);

  const addInputItem = (inpval) => {
    let newItemEntery = [...todoItems, inpval];
    setTodoItems(newItemEntery);
  };

  const handleDelItem = (delItem) => {
    const itemsListRemain = todoItems.filter(
      (item, index) => delItem !== index
    );
    setTodoItems(itemsListRemain);
  };
  return (
    <TodoContextStore.Provider
      value={{
        todoItems,
        addInputItem,
        handleDelItem,
      }}
    >
      {children}
    </TodoContextStore.Provider>
  );
};
