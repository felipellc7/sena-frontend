import React from 'react'
import "./FormSchedule.css"

export const FormSchedule = () => {
  return (
    <div class="schedule__content">
      <form action="" class="schedule__form">
        <div class="schedule__form-container-grid">
          <div class="schedule__form-group">
            <label for="date">Fecha</label>
            <input class="schedule__textbox" type="date" name="date" id="date" />
          </div>
          <div class="schedule__form-group">
            <label for="time">Hora</label>
            <input class="schedule__textbox" type="time" name="time" id="time" />
          </div>
        </div>
        <div class="schedule__form-container-grid">
          <div class="specialty__form-group">
            <label for="specialty">Especialidad</label>
            <select class="specialty__textbox" name="specialty" id="specialty">
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
        </div>
        <div class="schedule__form-group">
          <input type="submit" class="schedule__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormSchedule