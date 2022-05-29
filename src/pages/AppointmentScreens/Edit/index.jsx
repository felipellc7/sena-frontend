import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useAppointmentResources from '../../../hooks/useAppointmentResources'
import FormAppointment from '../../../components/FormAppointment'

const AppointmentEdit = () => {
  const { appointmentId } = useParams()
  const { appointment } = useAppointmentResources({
    loadAppointment: true,
    appointment_id: appointmentId
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Editar Cita")
  }, [])

  return (
    <FormAppointment appointment={appointment} />
  )
}

export default AppointmentEdit