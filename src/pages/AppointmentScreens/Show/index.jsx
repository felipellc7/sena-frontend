import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useAppointmentResources from '../../../hooks/useAppointmentResources'
import DetailAppointment from "../../../components/DetailAppointment"

const AppointmentShow = () => {
  const { appointmentId } = useParams()
  const { appointment } = useAppointmentResources({
    loadAppointment: true,
    appointment_id: appointmentId
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Detalle de cita")
  }, [])

  return (
    <DetailAppointment appointment={appointment} />
  )
}

export default AppointmentShow