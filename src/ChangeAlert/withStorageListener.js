import React, { useState } from "react";
/* high order componen  */
function withStorageListener(WrapppedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) =>{
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODO_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () =>{
      props.sincronizeTodos()
      setStorageChange(false);
    }

    return(
    <WrapppedComponent
      show={storageChange}
      toggleShow={toggleShow}
    />)
  }
}

export { withStorageListener }