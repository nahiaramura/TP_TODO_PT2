import React from "react";

function FilterButtons() {
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
    <div className="d-flex align-items-center gap-2">
      <label htmlFor="filtro" className="mb-0">Mostrar:</label>
      <select id="filtro" className="form-select form-select-sm"  disabled>
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
    </div>

    <div className="d-flex gap-2 flex-wrap">
      <button className="btn btn-custom btn-sm" disabled>
        ➕ Añadir
      </button>
      <button className="btn btn-custom btn-sm" disabled>
        Eliminar
      </button>
      <button className="btn btn-custom btn-sm" disabled>
        Rápida
      </button>
    </div>
  </div>
  );
}

export default FilterButtons;
