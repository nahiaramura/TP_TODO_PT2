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
    
    <div className="todo-app">
      <div className="container mt-5 p-4 shadow">
        <TodoForm />
      <FilterButtons />
      <TodoList /> 
    </div>
    </div>
  );
}

export default App;
