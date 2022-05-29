import {useState, useEffect} from 'react'
import {
  getAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment
} from '../services/appointmentServices'
import useTokenSettings from './useTokenSettings'
import useGetRequestErrors from './useGetRequestErrors'

const useAppointmentResources = ({
  loadAppointments = false,
  loadAppointment = false,
  appointment_id,
  searchParams = {}
}) => {
  const {inspectError} = useGetRequestErrors()
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const [appointment, setAppointment] = useState(null)
  const [appointments, setAppointments] = useState(null)
  const [applyFilters, setApplyFilters] = useState(false)

  useEffect(() => {
    loadAppointments && onLoadAppointments()
    loadAppointment && onLoadAppointment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadAppointments, loadAppointment])

  useEffect(() => {
    if (applyFilters) {
      onLoadAppointments()
      setApplyFilters(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyFilters])

  const onLoadAppointments = async () => {
    try {
      setLoad(true)
      let {data: {records}} = await getAppointments({
        params: searchParams,
        newCancelToken: newCancelToken()
      })
      setAppointments(records)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onLoadAppointment = async () => {
    try {
      setLoad(true)
      let {data} = await getAppointment({
        id: appointment_id,
        newCancelToken: newCancelToken()
      })
      setAppointment(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onCreateAppointment = async (body) => {
    try {
      setLoad(true)
      let {data} = await createAppointment({
        data: body,
        newCancelToken: newCancelToken()
      })
      setAppointment(data)
      setLoad(false)
      window.location.href = `/appointments/${data.id}`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }
  
  const onUpdateAppointment = async (body) => {
    try {
      setLoad(true)
      let {data} = await updateAppointment({
        data: body,
        newCancelToken: newCancelToken()
      })
      setAppointment(data)
      setLoad(false)
      window.location.href = `/appointments`
      setApplyFilters({filters: {
        code: data.code
      }})
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onDeleteAppointment = async () => {
    try {
      setLoad(true)
      await deleteAppointment({
        id: appointment_id,
        newCancelToken: newCancelToken()
      })
      setLoad(false)
      window.location.href = `/appointments`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  return {
    loadingAppointments: load,
    appointment,
    appointments,
    onCreateAppointment,
    onUpdateAppointment,
    onDeleteAppointment,
    setApplyFilters
  }
}

export default useAppointmentResources