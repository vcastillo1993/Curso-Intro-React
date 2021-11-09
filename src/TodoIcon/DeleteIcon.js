import React from "react";
import { TodoIcon } from ".";

function DeleteIcon({ eliminateOne }) {
 return(
  <TodoIcon
  type="delete"
  onClick={eliminateOne}
  />
 )
}

export {DeleteIcon};