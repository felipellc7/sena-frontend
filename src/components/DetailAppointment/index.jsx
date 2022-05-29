import React from 'react'
import "./DetailAppointment.css"
import ButtonsDetail from '../Shared/ButtonsDetail'
import useAppointmentResources from '../../hooks/useAppointmentResources'

const DetailAppointment = ({appointment}) => {
  const { onDeleteAppointment } = useAppointmentResources({
    appointment_id: appointment?.id
  })
  
  return (
    <>
      <ButtonsDetail
        entity={"appointments"}
        paramEdit={appointment?.id}
        actionDelete={onDeleteAppointment}
      />
      <div className="detail-appointment">
        <div className="detail-appointment__container-left">
          <h2>Informacion General</h2>
          <div className="detail-appointment__group">
            <div className="detail-appointment__group-item">
              <h4>Nombre del doctor</h4>
              <p>{appointment?.doctor?.full_name}</p>
            </div>
            <div className="detail-appointment__group-item">
              <h4>Dni del doctor</h4>
              <p>{appointment?.doctor?.dni}</p>
            </div>
          </div>
          <div className="detail-appointment__group">
            <div className="detail-appointment__group-item">
              <h4>Nombre del paciente</h4>
              <p>{appointment?.patient?.full_name}</p>
            </div>
            <div className="detail-appointment__group-item">
              <h4>Dni del paciente</h4>
              <p>{appointment?.patient?.dni}</p>
            </div>
          </div>
        </div>
        <div className="detail-appointment__container-left">
          <h2>Otra Informacion</h2>
          <div className="detail-appointment__group-item">
            <h4>Especialidad</h4>
            <p>{appointment?.doctor?.specialty?.name}</p>
          </div>
          <div className="detail-appointment__group">
            <div className="detail-appointment__group-item">
              <h4>Consultorio</h4>
              <p>{appointment?.schedule?.consulting_room?.name}</p>
            </div>
            <div className="detail-appointment__group-item">
              <h4>Fecha</h4>
              <p>{appointment?.schedule?.date}</p>
            </div>
            <div className="detail-appointment__group-item">
              <h4>Hora</h4>
              <p>{appointment?.schedule?.time}</p>
            </div>
            <div className="detail-appointment__group-item">
              <h4>Estado</h4>
              <p>{appointment?.status}</p>
            </div>
            <div className="detail-appointment__group">
            <div className="detail-appointment__group-item">
              <h4>Observaciones</h4>
              <p>{appointment?.observations}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailAppointment