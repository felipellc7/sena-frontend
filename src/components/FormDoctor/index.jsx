import React from 'react'
import "./FormDoctor.css"

const FormDoctor = () => {
  return (
    <div class="doctors__content">
      <form action="" class="doctors__form">
        <div class="doctors__form-container-grid">
          <div class="doctors__form-group">
            <label for="first_name">Nombres</label>
            <input class="doctors__textbox" type="text" name="first_name" id="first_name" placeholder="Ingrese nombres" />
          </div>
          <div class="doctors__form-group">
            <label for="last_name">Apellidos</label>
            <input class="doctors__textbox" type="text" name="last_name" id="last_name" placeholder="Ingrese apellidos" />
          </div>
        </div>
        <div class="doctors__form-container-grid">
          <div class="doctors__form-group">
            <label for="dni">Numero de Identificación</label>
            <input class="doctors__textbox" type="number" name="dni" id="dni" placeholder="Ingrese numero de identificación" />
          </div>
          <div class="doctors__form-group">
            <label for="phone">Celular</label>
            <input class="doctors__textbox" type="number" name="phone" id="phone" placeholder="Ingrese celular" />
          </div>
        </div>
        <div class="doctors__form-container-grid">
          <div class="doctors__form-group">
            <label for="email">Correo electronico</label>
            <input class="doctors__textbox" type="email" name="email" id="email" placeholder="Ingrese correo electronico" />
          </div>
          <div class="doctors__form-group">
            <label for="password">Contraseña</label>
            <input class="doctors__textbox" type="password" name="password" id="password" placeholder="Ingrese contraseña" />
          </div>
        </div>
        <div class="doctors__form-container-grid">
          <div class="doctors__form-group">
            <label for="specialty">Especialidad</label>
            <select class="doctors__textbox" name="specialty" id="specialty">
              <option value="">Seleccione una opción</option>
              <option value="1">Odontologia</option>
              <option value="2">Optometría</option>
              <option value="3">Traumatología</option>
              <option value="4">Dermatología</option>
              <option value="5">Medicina General</option>
              <option value="6">Neurología</option>
              <option value="7">Fisioteria</option>
              <option value="8">Laboratorio</option>
              <option value="9">Radiología</option>
              <option value="10">Oftalmología</option>
            </select>
          </div>
          <div class="doctors__form-group">
            <label for="active">Estado</label>
            <select class="doctors__textbox" name="active" id="active">
              <option value="true">Activo</option>
              <option value="false">No Activo</option>
            </select>
          </div>
        </div>
        <div class="doctors__form-group">
          <input type="submit" class="doctors__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormDoctor