import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useDoctorResources from '../../../hooks/useDoctorResources'
import FormDoctor from '../../../components/FormDoctor'

const DoctorEdit = () => {
  const { doctorDni } = useParams()
  const { doctor } = useDoctorResources({
    loadDoctor: true,
    doctor_dni: doctorDni
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Editar Doctor")
  }, [])

  return (
    <FormDoctor doctor={doctor} />
  )
}

export default DoctorEdit