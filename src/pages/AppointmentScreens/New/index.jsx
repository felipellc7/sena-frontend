import React, {useEffect} from 'react'
import FormAppointment from '../../../components/FormAppointment'

const AppointmentNew = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Crear Cita")
  }, [])

  return (
    <FormAppointment />
  )
}

export default AppointmentNew