import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useScheduleResources from '../../../hooks/useScheduleResources'
import FormSchedule from '../../../components/FormSchedule'

const ScheduleEdit = () => {
  const { scheduleId } = useParams()
  const { schedule } = useScheduleResources({
    loadSchedule: true,
    schedule_id: scheduleId
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Editar Agenda")
  }, [])
  
  return (
    <FormSchedule schedule={schedule} />
  )
}

export default ScheduleEdit