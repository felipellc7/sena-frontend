import React, {useEffect} from 'react'
import ListAppointments from '../../../components/ListAppointments'

const AppointmentList = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Citas")
  }, [])
  
  return (
    <ListAppointments />
  )
}

export default AppointmentList