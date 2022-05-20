import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import usePatientResources from '../../../hooks/usePatientResources'
import FormPatient from '../../../components/FormPatient'

const PatientEdit = () => {
  const { patientDni } = useParams()
  const { patient } = usePatientResources({
    loadPatient: true,
    patient_dni: patientDni
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Editar Paciente")
  }, [])

  return (
    <FormPatient patient={patient} />
  )
}

export default PatientEdit