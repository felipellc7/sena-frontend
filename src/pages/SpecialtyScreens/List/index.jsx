import React, {useEffect} from 'react'
import ListSpecialties from './../../../components/ListSpecialties'

const SpecialtyList = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Especialidades")
  }, [])
  
  return (
    <ListSpecialties />
  )
}

export default SpecialtyList