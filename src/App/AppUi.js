import React from "react";
/* import { React, useState } from "react"; */
import { Fragment } from "react/cjs/react.production.min";
import { TodoContext } from "../TodoContext";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList"
import TodoItem from "../TodoItem/TodoItem";
import "./CreateTodoButton.css";
import { Modal } from '../modal'

function AppUi() {

  const {
    loading,
    error,
    searchTodos,
    completeTodos,
    eliminateOne,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  const estado = (val)=>{
    if (openModal) {
      setOpenModal(val)
    }else if(!!openModal){
      setOpenModal(val)
    }
  }

  return (

    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/* estados de carga */}
        {error && <p> Desesperate, hubo un error...</p>}
        {loading && <p> Estamos cargando, no desesperes...</p>}
        {(!loading && !searchTodos.length) && <p>Crea tu primer TODO</p>}

        {
          searchTodos.map(todo => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeTodos={() => completeTodos(todo.text)}
              eliminateOne={() => eliminateOne(todo.id)}
            />
          ))
        }
      </TodoList>
      {openModal && (
        <Modal>
          <p>{searchTodos[0]?.text}</p>
        </Modal>

      )}
      <button onClick={()=>setOpenModal(true)}
        className="CreateTodoButton">
        +
      </button>
    </Fragment>

  )

}

export { AppUi };