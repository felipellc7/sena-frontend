import React, {useEffect} from 'react'
import DetailPatient from '../../../components/DetailPatient'
import usePatientResources from '../../../hooks/usePatientResources'
import {useParams} from "react-router-dom"

const PatientShow = () => {
  const {patientDni} = useParams()
  const { patient } = usePatientResources({
    loadPatient: true,
    patient_dni: patientDni
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Detalle de paciente")
  }, [])

  return (
    <DetailPatient patient={patient} />
  )
}

export default PatientShow