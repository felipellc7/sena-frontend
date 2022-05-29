import React, {useEffect} from 'react'
import FormSchedule from '../../../components/FormSchedule'

const ScheduleNew = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Crear Agenda")
  }, [])
  
  return (
    <FormSchedule />
  )
}

export default ScheduleNew