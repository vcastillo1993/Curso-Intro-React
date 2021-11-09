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
import { TodoForm } from "../TodoForm";
import {TodoLoading} from '../TodoLoading/index'
import {TodoError} from '../TodoError/index'
import {EmptyTodo} from '../EmptyTodo/index'

function AppUi() {

  const {
    loading,
    error,
    searchTodos,
    completeTodos,
    eliminateOne,
    openModal,
    estado
  } = React.useContext(TodoContext);


  return (

    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/* estados de carga */}
        {error && <TodoError error={error}/>}
        {loading && <TodoLoading/>}
        {(!loading && !searchTodos.length) && <EmptyTodo/>}

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
          <TodoForm/>
        </Modal>

      )}
      <button onClick={()=>estado()}
        className="CreateTodoButton">
        +
      </button>
    </Fragment>

  )

}

export { AppUi };