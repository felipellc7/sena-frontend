import React, { useEffect } from 'react'
import "./FormAppointment.css"
import useAppointmentResources from '../../hooks/useAppointmentResources'
import useForm from '../../hooks/useForm'
import {
  defaultValues, validationSchema, fillForm
} from "./config"
import Swal from 'sweetalert2'

export const FormAppointment = ({appointment}) => {
  const { handleSubmit, register, errors, reset } = useForm(
    validationSchema, {
      defaultValues
    }
  )
  const { onCreateAppointment, onUpdateAppointment } = useAppointmentResources({})

  useEffect(() => {
    if (appointment) {
      fillForm(reset, appointment)
    }
    // eslint-disable-next-line
  }, [appointment])

  const onSubmitForm = async (data) => {
    try {
      let response;
      const body = {appointment: data}
      if (appointment) {
        response = await onUpdateAppointment(body)
      } else {
        response = await onCreateAppointment(body)
      }
      console.log(response)
      // Swal.fire({
      //   title: 'Hecho',
      //   text: 'Cita guardada con éxito',
      //   icon: 'success',
      // })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error',
        text: 'No se pudo guardar la cita',
        icon: 'error',
      })
    }
  }

  console.log("errors", errors)
  
  return (
    <div class="appointments__content">
      <form action="" class="appointments__form" onSubmit={handleSubmit(onSubmitForm)}>
        <div class="appointments__form-container-grid">
          <div class="appointments__form-group">
            <label for="schedule_code">Agenda</label>
            <input {...register("schedule_code")} disabled={Boolean(appointment)} class="appointments__textbox" type="text" name="schedule_code" id="schedule" placeholder="Ingrese codigo de agenda" />
          </div>
          <div class="appointments__form-group">
            <label for="doctor_dni">Doctor</label>
            <input {...register("doctor_dni")} class="appointments__textbox" type="text" name="doctor_dni" id="doctor" placeholder="Ingrese dni de doctor" />
          </div>
        </div>
        <div class="appointments__form-container-grid">
          <div class="appointments__form-group">
            <label for="patient_dni">Paciente</label>
            <input {...register("patient_dni")} class="appointments__textbox" type="text" name="patient_dni" id="patient" placeholder="Ingrese dni de paciente" />
          </div>
        </div>
        <div class="appointments__form-container-grid">     
          <div class="appointments__form-group">
            <label for="observations">Observaciones</label>
            <textarea {...register("observations")} class="appointments__textbox" type="text" name="observations" id="observations" placeholder="Ingrese observaciones" rows="8"></textarea>
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