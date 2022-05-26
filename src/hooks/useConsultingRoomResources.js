import {useState, useEffect} from 'react'
import {
  getConsultingRooms,
  getConsultingRoom,
  createConsultingRoom,
  updateConsultingRoom,
  deleteConsultingRoom
} from '../services/consultingRoomServices'
import useTokenSettings from './useTokenSettings'
import useGetRequestErrors from './useGetRequestErrors'

const useConsultingRoomResources = ({
  loadConsultingRooms = false,
  loadConsultingRoom = false,
  consulting_room_id,
  searchParams = {}
}) => {
  const {inspectError} = useGetRequestErrors()
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const [consultingRoom, setConsultingRoom] = useState(null)
  const [consultingRooms, setConsultingRooms] = useState(null)
  const [applyFilters, setApplyFilters] = useState(false)

  useEffect(() => {
    loadConsultingRooms && onLoadConsultingRooms()
    loadConsultingRoom && onLoadConsultingRoom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadConsultingRooms, loadConsultingRoom])

  useEffect(() => {
    if (applyFilters) {
      onLoadConsultingRooms()
      setApplyFilters(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyFilters])

  const onLoadConsultingRooms = async () => {
    try {
      setLoad(true)
      let {data: {records}} = await getConsultingRooms({
        params: searchParams,
        newCancelToken: newCancelToken()
      })
      setConsultingRooms(records)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onLoadConsultingRoom = async () => {
    try {
      setLoad(true)
      let {data} = await getConsultingRoom({
        id: consulting_room_id,
        newCancelToken: newCancelToken()
      })
      setConsultingRoom(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onCreateConsultingRoom = async (body) => {
    try {
      setLoad(true)
      let {data} = await createConsultingRoom({
        data: body,
        newCancelToken: newCancelToken()
      })
      setConsultingRoom(data)
      setLoad(false)
      window.location.href = `/consulting_rooms`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onUpdateConsultingRoom = async (body) => {
    try {
      setLoad(true)
      let {data} = await updateConsultingRoom({
        id: consulting_room_id,
        data: body,
        newCancelToken: newCancelToken()
      })
      setConsultingRoom(data)
      setLoad(false)
      window.location.href = `/consulting_rooms`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onDeleteConsultingRoom = async () => {
    try {
      setLoad(true)
      await deleteConsultingRoom({
        id: consulting_room_id,
        newCancelToken: newCancelToken()
      })
      setLoad(false)
      window.location.href = `/consulting_rooms`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  return {
    loadingConsultingRooms: load,
    consultingRoom,
    consultingRooms,
    onCreateConsultingRoom,
    onUpdateConsultingRoom,
    onDeleteConsultingRoom,
    setApplyFilters
  }
}

export default useConsultingRoomResources