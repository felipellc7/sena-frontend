import React, {useEffect} from 'react'
import FormConsultingRoom from '../../../components/FormConsultingRoom'
import {useParams} from 'react-router-dom'
import useConsultingRoomResources from '../../../hooks/useConsultingRoomResources'

const ConsultingRoomEdit = () => {
  const { consultingRoomId } = useParams()
  const { consultingRoom } = useConsultingRoomResources({
    loadConsultingRoom: true,
    consulting_room_id: consultingRoomId
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Editar Consultorio")
  }, [])

  return (
    <FormConsultingRoom consulting_room={consultingRoom} />
  )
}

export default ConsultingRoomEdit