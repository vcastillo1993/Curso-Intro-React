import React from "react";
import { useTodos } from "./useTodos";
import { Fragment } from "react/cjs/react.production.min";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import "./CreateTodoButton.css";
import { Modal } from '../modal';
import { TodoForm } from "../TodoForm";
import { TodoLoading } from '../TodoLoading/index'
import { TodoError } from '../TodoError/index'
import { EmptyTodo } from '../EmptyTodo/index'
import { TodoHeader } from "../TodoHeader";
import { ChangeAlertWithStorageListener } from "../ChangeAlert/index"

/* const defaultodos = [
  {
    id: 1,
    text: 'Cortar cebolla',
    completed: false
  },
  {
    id: 2,
    text: 'Tomar el curso de intro a React',
    completed: true
  },
  {
    id: 3,
    text: 'Llorar con la llorona',
    completed: false
  }
];
 */



function App() {

  const {
    loading,
    error,
    searchTodos,
    completeTodos,
    eliminateOne,
    openModal,
    estado,
    totalTodos,
    completedTodos,
    valdefault,
    setValDefault,
    addTodos,
    setOpenModal,
    sincronizeTodos
  } = useTodos();


  return (

    <Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          
        />
        <TodoSearch
          valdefault={valdefault}
          setValDefault={setValDefault}
          
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        searchText ={valdefault}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmtyTodos={() => <EmptyTodo />}
        onEmtySearchResults={
          (searchText) =><p>No hay resultados para {searchText}</p>}
        /* render={todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodos={() => completeTodos(todo.text)}
            eliminateOne={() => eliminateOne(todo.id)}
          />)} */
      >
        {todo =>(
          <TodoItem
          key={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodos={() => completeTodos(todo.text)}
            eliminateOne={() => eliminateOne(todo.id)}
          />
        )}
      </TodoList>
      
      {openModal && (
        <Modal>
          <TodoForm
            addTodos={addTodos}
            setOpenModal={setOpenModal} />
        </Modal>

      )}
      <button onClick={() => estado()}
        className="CreateTodoButton">
        +
      </button>
      <ChangeAlertWithStorageListener 
      sincronizeTodos ={sincronizeTodos}
      />
    </Fragment>

  )
}

export default App;
