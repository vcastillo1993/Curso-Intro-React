import React, { useState } from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');
  const {
    addTodos,
    setOpenModal
  } = React.useContext(TodoContext);

  const onWrite = (event) => {
    setNewTodoValue(event.target.value);
    
  }

  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodoValue);
    setNewTodoValue('');
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>¿QUE DESEAS AGREGAR?</label>
      <textarea
        placeholder="Ingresa nuevo Todo"
        value={newTodoValue}
        onChange={onWrite}
      />
      <div>
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button 
        type="submit"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };