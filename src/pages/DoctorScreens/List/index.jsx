import React, { useEffect } from 'react'
import ListDoctors from '../../../components/ListDoctors'

const DoctorList = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Doctores")
  }, [])

  return (
    <ListDoctors />
  )
}

export default DoctorList