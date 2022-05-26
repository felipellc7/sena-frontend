import React, {useEffect} from 'react'
import FormConsultingRoom from '../../../components/FormConsultingRoom'

const ConsultingRoomNew = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', 'Crear Consultorio')
  }, [])

  return (
    <FormConsultingRoom />
  )
}

export default ConsultingRoomNew