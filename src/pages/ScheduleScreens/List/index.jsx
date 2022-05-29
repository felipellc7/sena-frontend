import React, {useEffect} from 'react'
import ListSchedules from '../../../components/ListSchedules'

const ScheduleList = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Agendas")
  }, [])

  return (
    <ListSchedules />
  )
}

export default ScheduleList