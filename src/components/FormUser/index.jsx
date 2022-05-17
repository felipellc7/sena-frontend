import React from 'react'
import "./FormUser.css"

const FormUser = () => {
  return (
    <div class="users__content">
      <form action="" class="users__form">
        <div class="users__form-container-grid">
          <div class="users__form-group">
            <label for="first_name">Nombres</label>
            <input class="users__textbox" type="text" name="first_name" id="first_name" placeholder="Ingrese nombres" />
          </div>
          <div class="users__form-group">
            <label for="last_name">Apellidos</label>
            <input class="users__textbox" type="text" name="last_name" id="last_name" placeholder="Ingrese apellidos" />
          </div>
        </div>
        <div class="users__form-container-grid">
          <div class="users__form-group">
            <label for="dni">Numero de Identificación</label>
            <input class="users__textbox" type="number" name="dni" id="dni" placeholder="Ingrese numero de identificación" />
          </div>
          <div class="users__form-group">
            <label for="phone">Celular</label>
            <input class="users__textbox" type="number" name="phone" id="phone" placeholder="Ingrese celular" />
          </div>
        </div>
        <div class="users__form-container-grid">
          <div class="users__form-group">
            <label for="email">Correo electronico</label>
            <input class="users__textbox" type="email" name="email" id="email" placeholder="Ingrese correo electronico" />
          </div>
          <div class="users__form-group">
            <label for="password">Contraseña</label>
            <input class="users__textbox" type="password" name="password" id="password" placeholder="Ingrese contraseña" />
          </div>
        </div>
        <div class="users__form-container-grid">
          <div class="users__form-group">
            <label for="active">Estado</label>
            <select class="users__textbox" name="active" id="active">
              <option value="true">Activo</option>
              <option value="false">No Activo</option>
            </select>
          </div>
        </div>
        <div class="users__form-group">
          <input type="submit" class="users__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormUser