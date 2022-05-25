import React, {useEffect} from 'react'

const ConsultingRoomShow = () => {

  useEffect(() => {
    localStorage.setItem('currentScreen', 'Detalle de consultorio')
  }, [])

  return (
    <div>ConsultingRoomShow</div>
  )
}

export default ConsultingRoomShow