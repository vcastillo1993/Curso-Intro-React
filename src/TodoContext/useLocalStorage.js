import React, { useEffect, useState } from "react";

/* creando mi propio UseHook */
function useLocalStorage(itemName, initialValue) {
  /* ESTADOS DE CARGA */
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
    try{ 
      /* ====================== LOCALSTORAGE ========================== */
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      /*==================== LOCALSTORAGE ========================== */
    }catch(error){
      setError(error)
      console.log(error)
      alert('ha sucedio un error')
    }
    }, 2000);
  })

  /*================= persisitencias en localStorage ==================*/

  const saveTodos = (newItem) => {
   try {
    const stringigiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringigiedTodos);
    setItem(newItem);
   } catch (error) {
     setError(error);
   }
  }

  /*================= persisitencias en localStorage ==================*/

  return{
      item,
      saveTodos,
      loading,
      error
  }

}

export {useLocalStorage};
