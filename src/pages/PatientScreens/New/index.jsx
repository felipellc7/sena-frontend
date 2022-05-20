import React, {useEffect} from 'react'
import FormPatient from '../../../components/FormPatient'

const PatientNew = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Crear Paciente")
  }, [])
  
  return (
    <FormPatient />
  )
}

export default PatientNew