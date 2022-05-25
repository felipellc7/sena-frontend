import React, {useEffect} from 'react'

const ConsultingRoomNew = () => {

  useEffect(() => {
    localStorage.setItem('currentScreen', 'Crear Consultorio')
  }, [])

  return (
    <div>ConsultingRoomNew</div>
  )
}

export default ConsultingRoomNew