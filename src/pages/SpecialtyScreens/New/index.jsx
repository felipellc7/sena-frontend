import React, {useEffect} from 'react'
import FormSpecialty from '../../../components/FormSpecialty'

const SpecialtyNew = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', 'Crear Especialidad')
  }, [])

  return (
    <FormSpecialty />
  )
}

export default SpecialtyNew