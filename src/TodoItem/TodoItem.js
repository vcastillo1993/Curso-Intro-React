import React from 'react'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

const TodoItem = (props) => { 

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        completeTodos={props.completeTodos} 
        />
      <span
         className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </span>
      <DeleteIcon
        eliminateOne={props.eliminateOne}
      />
    </li>
  )
}

export default TodoItem

