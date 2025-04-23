//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import './App.css'
import './index.css'

function App() {
  const tareas = [
    {
      id: 1,
      texto: "Terminar TP EFSI",
      completada: false,
      fechaCreacion: "2025-04-22",
      fechaFinalizacion: null,
    },
    {
      id: 2,
      texto: "Estudiar matematica",
      completada: true,
      fechaCreacion: "2025-04-20",
      fechaFinalizacion: "2025-04-21",
    },
    {
      id: 3,
      texto: "Comprar 3 bananas",
      completada: false,
      fechaCreacion: "2025-04-19",
      fechaFinalizacion: null,
    },
  ];

  return (
    <div className="todo-app">
      <div className="container mt-5 p-4 shadow">
      <TodoForm />
    </div>
      <FilterButtons />
      <TodoList tareas={tareas} />
    </div>
  );
}

export default App;
