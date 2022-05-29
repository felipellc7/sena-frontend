import {useState, useEffect} from 'react'
import {
  getSchedules,
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule
} from '../services/scheduleServices'
import useTokenSettings from './useTokenSettings'
import useGetRequestErrors from './useGetRequestErrors'

const useScheduleResources = ({
  loadSchedules = false,
  loadSchedule = false,
  schedule_id,
  searchParams = {}
}) => {
  const {inspectError} = useGetRequestErrors()
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const [schedule, setSchedule] = useState(null)
  const [schedules, setSchedules] = useState(null)
  const [applyFilters, setApplyFilters] = useState(false)

  useEffect(() => {
    loadSchedules && onLoadSchedules()
    loadSchedule && onLoadSchedule()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadSchedules, loadSchedule])

  useEffect(() => {
    if (applyFilters) {
      onLoadSchedules()
      setApplyFilters(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyFilters])

  const onLoadSchedules = async () => {
    try {
      setLoad(true)
      let {data: {records}} = await getSchedules({
        params: searchParams,
        newCancelToken: newCancelToken()
      })
      setSchedules(records)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onLoadSchedule = async () => {
    try {
      setLoad(true)
      let {data} = await getSchedule({
        id: schedule_id,
        newCancelToken: newCancelToken()
      })
      setSchedule(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onCreateSchedule = async (body) => {
    try {
      setLoad(true)
      let {data} = await createSchedule({
        data: body,
        newCancelToken: newCancelToken()
      })
      setSchedule(data)
      setLoad(false)
      window.location.href = `/schedules/${data.id}`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }
  
  const onUpdateSchedule = async (body) => {
    try {
      setLoad(true)
      let {data} = await updateSchedule({
        data: body,
        newCancelToken: newCancelToken()
      })
      setSchedule(data)
      setLoad(false)
      window.location.href = `/schedules`
      setApplyFilters({filters: {
        code: data.code
      }})
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onDeleteSchedule = async () => {
    try {
      setLoad(true)
      await deleteSchedule({
        id: schedule_id,
        newCancelToken: newCancelToken()
      })
      setLoad(false)
      window.location.href = `/schedules`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  return {
    loadingSchedules: load,
    schedule,
    schedules,
    onCreateSchedule,
    onUpdateSchedule,
    onDeleteSchedule,
    setApplyFilters
  }
}

export default useScheduleResources