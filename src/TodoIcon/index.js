import React, { Fragment } from "react";
import { ReactComponent as Checkbox } from './Checkbox.svg'
import { ReactComponent as Eliminar } from './Eliminar.svg'
import './TodoIcon.css'

const iconTypes = {
  "check": color => (
    <Checkbox
      className="Icon-svg Icon-svg--Checkbox" fill={color} />
  ),
  "delete": color => (
    <Eliminar
      className="Icon-svg Icon-svg--Eliminar" fill={color} />
  )
}

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick = { onClick }
      >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };