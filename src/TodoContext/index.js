import React,{ useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

  const {
    item: todos,
    saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  
  const [valdefault, setValDefault] = useState('');
  const [openModal, setOpenModal] = useState(false);

  /* contart cuantas tareas hay por completar */
  const totalTodos = todos.length;
  /* contar cuantas tareas se completaron  */
  const completedTodos = todos.filter(todo => todo.completed).length;

  let searchTodos = [];

  if (!valdefault.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = valdefault.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const addTodos = (text) => {
    
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
    
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    console.log('si funciono');
  }

  const eliminateOne = (id) => {
    console.log('eliminacion funciona')
    const thisIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(thisIndex, 1);
    saveTodos(newTodos);
  }

  function estado  () {
    if(!openModal){
      setOpenModal(true)
    }else{
      setOpenModal(false)
    }
  }
  return(

    <TodoContext.Provider value = {{
      loading,
      error,
      completedTodos,
      totalTodos,
      valdefault,
      setValDefault,
      searchTodos,
      completeTodos,
      addTodos,
      eliminateOne,
      openModal,
      setOpenModal,
      estado
    }}>
    {props.children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};

