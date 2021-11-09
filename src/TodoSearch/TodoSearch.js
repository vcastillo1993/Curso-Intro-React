import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import {TodoContext} from '../TodoContext'
import './TodoSearch.css'

const TodoSearch = () => {

  const {valdefault, setValDefault} = React.useContext(TodoContext);

const onChangeValue = (event) => {
  console.log(event.target.value);
  setValDefault(event.target.value)
}

  return (
    <Fragment>
      <input
      className="TodoSearch"
      placeholder ="TAREA"
      value ={valdefault}
      onChange={onChangeValue}
      />
    </Fragment>
  )
}

export default TodoSearch
