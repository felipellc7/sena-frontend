import React, {useEffect} from 'react'
import ListPatients from '../../../components/ListPatients'

const PatientList = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Pacientes")
  }, [])
  
  return (
    <ListPatients />
  )
}

export default PatientList