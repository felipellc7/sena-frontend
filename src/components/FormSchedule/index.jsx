import React, {useEffect} from 'react'
import "./FormSchedule.css"
import useConsultingRoomResources from '../../hooks/useConsultingRoomResources'
import useScheduleResources from '../../hooks/useScheduleResources'
import useForm from '../../hooks/useForm'
import {
  defaultValues, validationSchema, fillForm
} from "./config"
import Swal from 'sweetalert2'

export const FormSchedule = ({schedule}) => {
  const { handleSubmit, register, errors, reset } = useForm(
    validationSchema, {
      defaultValues
    }
  )
  const { consultingRooms } = useConsultingRoomResources({
    loadConsultingRooms: true,
  })
  const { onCreateSchedule, onUpdateSchedule } = useScheduleResources({})

  useEffect(() => {
    if (schedule) {
      fillForm(reset, schedule)
    }
    // eslint-disable-next-line
  }, [schedule])

  const onSubmitForm = async (data) => {
    try {
      const body = {schedule: data}
      if (schedule) {
        await onUpdateSchedule(body)
      } else {
        await onCreateSchedule(body)
      }
      Swal.fire({
        title: 'Hecho',
        text: 'Agenda guardada con éxito',
        icon: 'success',
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error',
        text: 'No se pudo guardar la agenda',
        icon: 'error',
      })
    }
  }

  console.log("errors", errors)

  return (
    <div className="schedule__content">
      <form action="" className="schedule__form" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="schedule__form-container-grid">
          {schedule && (
            <div className="schedule__form-group">
              <label htmlFor="time">Codigo</label>
              <input className="schedule__textbox" type="text" name="code" id="code" disabled={true} value={schedule?.code} />
            </div>
          )}
          <div className="schedule__form-group">
            <label htmlFor="consulting_room_id">Consultorio</label>
            <select {...register("consulting_room_id")} className="schedule__textbox" name="consulting_room_id" id="consulting_room_id">
              <option value="">Seleccione una opción</option>
              {(consultingRooms || []).map(({id, name, specialty}) => (
                <option key={id} value={id}>
                  {name} - {specialty.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="schedule__form-container-grid">
          <div className="schedule__form-group">
            <label htmlFor="date">Fecha</label>
            <input {...register("date")} className="schedule__textbox" type="date" name="date" id="date" />
          </div>
          <div className="schedule__form-group">
            <label htmlFor="time">Hora</label>
            <input {...register("time")} className="schedule__textbox" type="time" name="time" id="time" />
          </div>
        </div>
        <div className="schedule__form-group">
          <input type="submit" className="schedule__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormSchedule