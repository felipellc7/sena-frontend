import React, {useEffect} from 'react'

const ConsultingRoomEdit = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Editar Consultorio")
  }, [])

  return (
    <div>ConsultingRoomEdit</div>
  )
}

export default ConsultingRoomEdit