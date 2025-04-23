function TodoItem({ tarea }) {
    return (
      <li className={`todo-item ${tarea.completada ? "completada" : ""}`}>
        <span>{tarea.texto}</span>
        <div className="fechas">
          <small>Creada: {tarea.fechaCreacion}</small>
          {tarea.completada && (
            <small> | Finalizada: {tarea.fechaFinalizacion}</small>
          )}
        </div>
      </li>
    );
  }
  
  export default TodoItem;
  