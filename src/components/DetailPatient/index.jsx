import React from 'react'
import "./DetailPatient.css"
import ButtonsDetail from '../Shared/ButtonsDetail'
import usePatientResources from '../../hooks/usePatientResources'

const DetailPatient = ({patient}) => {
  const { onDeletePatient } = usePatientResources({
    patient_dni: patient?.dni
  })
  const gender = patient?.gender === 'male' ? 'Masculino' : 'Femenino'
  return (
    <>
      <ButtonsDetail
        entity={"patients"}
        paramEdit={patient?.dni}
        actionDelete={onDeletePatient}
      />
      <div className="detail-patient">
        <div className="detail-patient__container-left">
          <h2>Informacion Personal</h2>
          <div className="detail-patient__group">
            <div className="detail-patient__group-item">
              <h4>Nombres</h4>
              <p>{patient?.first_name}</p>
            </div>
            <div className="detail-patient__group-item">
              <h4>Apellidos</h4>
              <p>{patient?.last_name}</p>
            </div>
          </div>
          <div className="detail-patient__group">
            <div className="detail-patient__group-item">
              <h4>Numero de Identificación</h4>
              <p>{patient?.dni}</p>
            </div>
            <div className="detail-patient__group-item">
              <h4>Género</h4>
              <p>{gender}</p>
            </div>
          </div>
          <div className="detail-patient__group">
            <div className="detail-patient__group-item">
              <h4>Celular</h4>
              <p>{patient?.phone}</p>
            </div>
            <div className="detail-patient__group-item">
              <h4>Correo Electronico</h4>
              <p>{patient?.email}</p>
            </div>
          </div>
          <div className="detail-patient__group">
            <div className="detail-patient__group-item">
              <h4>Activo</h4>
              <p>{patient?.active ? "Si" : "No"}</p>
            </div>
          </div>
        </div>
        <div className="detail-patient__container-left">
          <h2>Otra Informacion</h2>
          <p>No disponible</p>
        </div>
      </div>
    </>
  )
}

export default DetailPatient