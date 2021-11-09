import React, { Fragment } from "react";
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {

  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <Fragment>
      <h2 className ="TitleTodoCounter" >
        Has completado {completedTodos} de {totalTodos} Tarea</h2>
    </Fragment>
  )
}

export default TodoCounter;
