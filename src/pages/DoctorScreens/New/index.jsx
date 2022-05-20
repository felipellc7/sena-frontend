import React, {useEffect} from 'react'
import FormDoctor from '../../../components/FormDoctor'

const DoctorNew = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Crear Doctor")
  }, [])
  
  return (
    <FormDoctor />
  )
}

export default DoctorNew