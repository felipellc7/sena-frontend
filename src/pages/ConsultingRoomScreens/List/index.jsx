import React, {useEffect} from 'react'
import ListConsultingRooms from '../../../components/ListConsultingRooms'

const ConsultingRoomList = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Consultorios")
  }, [])

  return (
    <ListConsultingRooms />
  )
}

export default ConsultingRoomList