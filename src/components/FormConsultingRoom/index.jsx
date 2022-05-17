import React from 'react'
import "./FormConsultingRoom.css"

const FormConsultingRoom = () => {
  return (
    <div class="consulting_rooms__content">
      <form action="" class="consulting_rooms__form">
        <div class="consulting_rooms__form-container-grid">
          <div class="consulting_rooms__form-group">
            <label for="name">Nombre</label>
            <input class="consulting_rooms__textbox" type="text" name="name" id="name" placeholder="Ingrese nombre" />
          </div>
          <div class="consulting_rooms__form-group">
            <label for="location">Ubicacion</label>
            <input class="consulting_rooms__textbox" type="text" name="location" id="location" placeholder="Ingrese ubicacion" />
          </div>
        </div>
        <div class="consulting_rooms__form-container-grid">
          <div class="consulting_rooms__form-group">
            <label for="specialty">Especialidad</label>
            <select class="consulting_rooms__textbox" name="specialty" id="specialty">
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
        <div class="consulting_rooms__form-group">
          <input type="submit" class="consulting_rooms__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormConsultingRoom