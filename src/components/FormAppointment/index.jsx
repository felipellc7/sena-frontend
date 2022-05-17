import React from 'react'
import "./FormAppointment.css"

export const FormAppointment = () => {
  return (
    <div class="appointments__content">
      <form action="" class="appointments__form">
        <div class="appointments__form-container-grid">
          <div class="appointments__form-group">
            <label for="schedule">Agenda</label>
            <input class="appointments__textbox" list="datalist-schedule" type="text" name="schedule" id="schedule" placeholder="Ingrese agenda" />
            <datalist id="datalist-schedule">
              <option>AGENDA-P001</option>
              <option>AGENDA-P002</option>
              <option>AGENDA-P003</option>
              <option>AGENDA-P004</option>
              <option>AGENDA-P005</option>
            </datalist>
          </div>
          <div class="appointments__form-group">
            <label for="doctor">Doctor</label>
            <input class="appointments__textbox" list="datalist-doctor" type="text" name="doctor" id="doctor" placeholder="Ingrese doctor" />
            <datalist id="datalist-doctor">
              <option>DOCTOR-001</option>
              <option>DOCTOR-002</option>
              <option>DOCTOR-003</option>
              <option>DOCTOR-004</option>
              <option>DOCTOR-005</option>
            </datalist>
          </div>
        </div>
        <div class="appointments__form-container-grid">
          <div class="appointments__form-group">
            <label for="patient">Paciente</label>
            <input class="appointments__textbox" list="datalist-patient" type="text" name="patient" id="patient" placeholder="Ingrese paciente" />
            <datalist id="datalist-patient">
              <option>PACIENTE-001</option>
              <option>PACIENTE-002</option>
              <option>PACIENTE-003</option>
              <option>PACIENTE-004</option>
              <option>PACIENTE-005</option>
            </datalist>
          </div>
          <div class="appointments__form-group">
            <label for="status">Estado de la cita</label>
            <select class="appointments__textbox" name="status" id="status">
              <option value="">Seleccione una opción</option>
              <option value="1">Reservada</option>
              <option value="2">Confirmada</option>
              <option value="3">En curso</option>
              <option value="4">Cerrada</option>
              <option value="5">Cancelada</option>
            </select>
          </div>
        </div>
        <div class="appointments__form-container-grid">     
          <div class="appointments__form-group">
            <label for="observations">Observaciones</label>
            <textarea class="appointments__textbox" type="text" name="observations" id="observations" placeholder="Ingrese observaciones" rows="8"></textarea>
          </div>
        </div>

        <div class="appointments__form-group">
          <input type="submit" class="appointments__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormAppointment