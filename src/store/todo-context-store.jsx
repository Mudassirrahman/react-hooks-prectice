import { createContext, useState } from "react";
export const TodoContext = createContext([]);

const TodoContextProvider = props => {
    let [inputVal, setInputVal] = useState([]);
    let handleTodoInput = newItem => {
        setInputVal([...inputVal, newItem]);
    };
    const handleDeleteItem = itemToDel => {
        const updatedList = inputVal.filter(
            (item, index) => index !== itemToDel
        );
        setInputVal(updatedList);
    };
    return (
        <TodoContext.Provider
            value={{ inputVal, handleTodoInput, handleDeleteItem }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};
export default TodoContextProvider;