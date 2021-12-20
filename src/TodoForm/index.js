import React, { useState } from "react";
import './TodoForm.css'


function TodoForm({addTodos, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = useState('');

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