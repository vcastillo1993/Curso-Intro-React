import React, { useEffect, useState } from "react";

/* creando mi propio UseHook */
function useLocalStorage(itemName, initialValue) {
  /* ESTADOS DE CARGA */
  const [sincronizedItem, setSincronizedItem] = useState(true);
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
      setSincronizedItem(true)
      /*==================== LOCALSTORAGE ========================== */
    }catch(error){
      setError(error)
      console.log(error)
      alert('ha sucedio un error')
    }
    }, 1000);
  },[sincronizedItem])

  /*================= persisitencias en localStorage ==================*/

  const saveTodos = (newItem) => {
   try {
    const stringigiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringigiedTodos);
    setItem(newItem);
   } catch (error) {
     setError(error);
   }
  };

  const sincronizeItem = ()=>{
    setLoading(true);
    setSincronizedItem(false);
  }

  /*================= persisitencias en localStorage ==================*/

  return{
      item,
      saveTodos,
      loading,
      error,
      sincronizeItem
  }

}

export {useLocalStorage};
