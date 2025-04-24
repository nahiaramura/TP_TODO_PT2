//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import './App.css'
import './index.css'

function App() {

  return (
  <body>
    <div className="todo-app">
      <div className="container mt-5 p-4 shadow">
        <TodoForm />
      <FilterButtons />
      <TodoList /> 
    </div>
    </div>
    </body>
  );
}

export default App;
