import TodoItem from "./TodoItem";

function TodoList({ tareas }) {
  return (
    <ul className="todo-list">
      {tareas.map((tarea) => (
        <TodoItem key={tarea.id} tarea={tarea} />
      ))}
    </ul>
  );
}

export default TodoList;
