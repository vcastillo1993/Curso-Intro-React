import React, { Fragment } from "react";
import './TodoCounter.css';

const TodoCounter = ({totalTodos, completedTodos, loading}) => {

  return (
    <Fragment>
      <h2 className ={`TitleTodoCounter ${!!loading && "TodoCounter--loading"}`}
       >
        Has completado {completedTodos} de {totalTodos} Tarea</h2>
    </Fragment>
  )
}

export default TodoCounter;
