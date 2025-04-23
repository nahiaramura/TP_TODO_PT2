import React, { Fragment } from 'react';
function CrearForm() 
{
    return(
        <Fragment>
 <h1 className="mb-4">🌸 Lista de Tareas 🌸</h1>

<form className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Introducir tarea"  minLength="3" maxLength="100" required disabled/>
</form>
        </Fragment>
        );
}

export default CrearForm;