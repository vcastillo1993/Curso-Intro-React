import React from 'react';
import '../TodoLoading/loadin.css'

function EmptyTodo() {
  return(
    <div className="container">
      <div className="background">
        <p>Puedes gregar un nuevo Todo</p>
      </div>
    </div>
  )
}

export {EmptyTodo};