import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({completed, completeTodos}) {
  return(
    <TodoIcon
    type="check"
    color={completed ? '#4caf50' : 'gray'}
    onClick={completeTodos}
    />   
  );
  
}

export {CompleteIcon};

