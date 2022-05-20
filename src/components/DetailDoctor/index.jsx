import React from 'react'
import "./DetailDoctor.css"
import ButtonsDetail from '../Shared/ButtonsDetail'
import useDoctorResources from '../../hooks/useDoctorResources'

const DetailDoctor = ({doctor}) => {
  const { onDeleteDoctor } = useDoctorResources({
    doctor_dni: doctor?.dni 
  })
  const gender = doctor?.gender === 'male' ? 'Masculino' : 'Femenino'
  return (
    <>
      <ButtonsDetail
        entity={"doctors"}
        paramEdit={doctor?.dni}
        actionDelete={onDeleteDoctor}
      />
      <div className="detail-doctor">
        <div className="detail-doctor__container-left">
          <h2>Informacion Personal</h2>
          <div className="detail-doctor__group">
            <div className="detail-doctor__group-item">
              <h4>Nombres</h4>
              <p>{doctor?.first_name}</p>
            </div>
            <div className="detail-doctor__group-item">
              <h4>Apellidos</h4>
              <p>{doctor?.last_name}</p>
            </div>
          </div>
          <div className="detail-doctor__group">
            <div className="detail-doctor__group-item">
              <h4>Numero de Identificación</h4>
              <p>{doctor?.dni}</p>
            </div>
            <div className="detail-doctor__group-item">
              <h4>Género</h4>
              <p>{gender}</p>
            </div>
          </div>
          <div className="detail-doctor__group">
            <div className="detail-doctor__group-item">
              <h4>Especialidad</h4>
              <p>{doctor?.specialty?.name}</p>
            </div>
            <div className="detail-doctor__group-item">
              <h4>Celular</h4>
              <p>{doctor?.phone}</p>
            </div>
          </div>
          <div className="detail-doctor__group">
            <div className="detail-doctor__group-item">
              <h4>Correo Electronico</h4>
              <p>{doctor?.email}</p>
            </div>
            <div className="detail-doctor__group-item">
              <h4>Activo</h4>
              <p>{doctor?.active ? "Si" : "No"}</p>
            </div>
          </div>
        </div>
        <div className="detail-doctor__container-left">
          <h2>Otra Informacion</h2>
          <p>No disponible</p>
        </div>
      </div>
    </>
  )
}

export default DetailDoctor