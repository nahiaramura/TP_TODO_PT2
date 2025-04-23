import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const tareas = [
    {
      texto: "Comprar cena",
      completada: false,
      fechaCreacion: "2025-04-22",
      fechaFinalizacion: "",
    },
    {
      texto: "Estudiar React",
      completada: true,
      fechaCreacion: "2025-04-21",
      fechaFinalizacion: "2025-04-21",
    },
    {
      texto: "Ir al gimnasio",
      completada: false,
      fechaCreacion: "2025-04-20",
      fechaFinalizacion: "",
    },
  ];

  return (
    <ul id="taskList" className="list-group">
      {tareas.map((tarea, index) => (
        <TodoItem key={index} tarea={tarea} />
      ))}
    </ul>
  );
}

export default TodoList;
