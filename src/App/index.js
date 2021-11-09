import React  from "react";
import { TodoProvider } from "../TodoContext";
import { AppUi } from './AppUi';

/* const defaultodos = [
  {
    id: 1,
    text: 'Cortar cebolla',
    completed: false
  },
  {
    id: 2,
    text: 'Tomar el curso de intro a React',
    completed: true
  },
  {
    id: 3,
    text: 'Llorar con la llorona',
    completed: false
  }
];
 */



function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
    
  );
}

export default App;
