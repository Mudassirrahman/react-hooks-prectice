import {useContext} from 'react'
 import {TodoContext} from '../../store/todo-context-store.jsx'
 function TodoList () {
   const {inputVal, handleDeleteItem} = useContext(TodoContext);
  return (
 <>
    <ul className='list-group text-start mb-3 mt-3'>
     {inputVal.length === 0 ? <h1 className="text-center">Enjoy your day </h1> : null}
    {inputVal.map((item,index) => {
      return (
        <div className='d-flex'>
        <li key={index} className='list-group-item list-group-item-action'>{item}
        <button onClick={() => {handleDeleteItem(index)}} className='btn btn-danger float-end'>delete</button>
        </li>
        </div>
        )
   } )}
    </ul>
    </>
    );
}
export default TodoList;