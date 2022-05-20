import React from 'react'
import DetailDoctor from '../../../components/DetailDoctor'
import useDoctorResources from '../../../hooks/useDoctorResources'
import {useParams} from "react-router-dom"

const DoctorShow = () => {
  const {doctorDni} = useParams()
  const { doctor } = useDoctorResources({
    loadDoctor: true,
    doctor_dni: doctorDni
  })
  return (
    <DetailDoctor doctor={doctor} />
  )
}

export default DoctorShow