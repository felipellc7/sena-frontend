import React from 'react'
import "./FormPatient.css"

const FormPatient = () => {
  return (
    <div class="patients__content">
      <form action="" class="patients__form">
        <div class="patients__form-container-grid">
          <div class="patients__form-group">
            <label for="first_name">Nombres</label>
            <input class="patients__textbox" type="text" name="first_name" id="first_name" placeholder="Ingrese nombres" />
          </div>
          <div class="patients__form-group">
            <label for="last_name">Apellidos</label>
            <input class="patients__textbox" type="text" name="last_name" id="last_name" placeholder="Ingrese apellidos" />
          </div>
        </div>
        <div class="patients__form-container-grid">
          <div class="patients__form-group">
            <label for="dni">Numero de Identificación</label>
            <input class="patients__textbox" type="number" name="dni" id="dni" placeholder="Ingrese numero de identificación" />
          </div>
          <div class="patients__form-group">
            <label for="phone">Celular</label>
            <input class="patients__textbox" type="number" name="phone" id="phone" placeholder="Ingrese celular" />
          </div>
        </div>
        <div class="patients__form-container-grid">
          <div class="patients__form-group">
            <label for="email">Correo electronico</label>
            <input class="patients__textbox" type="email" name="email" id="email" placeholder="Ingrese correo electronico" />
          </div>
          <div class="patients__form-group">
            <label for="password">Contraseña</label>
            <input class="patients__textbox" type="password" name="password" id="password" placeholder="Ingrese contraseña" />
          </div>
        </div>
        <div class="patients__form-container-grid">
          <div class="patients__form-group">
            <label for="active">Estado</label>
            <select class="patients__textbox" name="active" id="active">
              <option value="true">Activo</option>
              <option value="false">No Activo</option>
            </select>
          </div>
        </div>
        <div class="patients__form-group">
          <input type="submit" class="patients__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormPatient