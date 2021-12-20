import React from "react"
import './TodoList.css'

const TodoList = (props) => {

  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmtyTodos()}

      {(!!props.totalTodos && !props.searchTodos.length) && props.onEmtySearchResults(props.searchText)}

      {props.searchTodos.map(renderFunc)}

      <ul >
        {props.children}
      </ul>
    </section>
  )
}

export default TodoList
