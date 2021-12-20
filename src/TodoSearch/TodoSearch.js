import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import './TodoSearch.css'

const TodoSearch = ({valdefault, setValDefault, loading}) => {

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
      disabled={loading}
      />
    </Fragment>
  )
}

export default TodoSearch
