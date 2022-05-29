import React, {useEffect} from 'react'

const ScheduleShow = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Detalle de agenda")
  }, [])

  return (
    <div>ScheduleShow</div>
  )
}

export default ScheduleShow