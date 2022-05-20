import React, {useEffect} from 'react'
import DetailDoctor from '../../../components/DetailDoctor'
import useDoctorResources from '../../../hooks/useDoctorResources'
import {useParams} from "react-router-dom"

const DoctorShow = () => {
  const {doctorDni} = useParams()
  const { doctor } = useDoctorResources({
    loadDoctor: true,
    doctor_dni: doctorDni
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Detalle de doctor")
  }, [])
  
  return (
    <DetailDoctor doctor={doctor} />
  )
}

export default DoctorShow