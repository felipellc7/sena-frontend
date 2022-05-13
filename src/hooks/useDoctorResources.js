import {useState, useEffect} from "react"
import {
  getDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor
} from "./../services/doctorServices"
import useTokenSettings from "./useTokenSettings"
import useGetRequestErrors from "./useGetRequestErrors";
import { useHistory } from "react-router-dom";

const useDoctorResources = ({
  loadDoctors = false,
  loadDoctor = false,
  doctor_dni,
  searchParams = {
    skipRecords: 0,
    maxRecords: 10
  },
}) => {
  const history = useHistory()
  const { inspectError } = useGetRequestErrors()
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const [doctor, setDoctor] = useState(null)
  const [doctors, setDoctors] = useState(null)

  useEffect(() => {
    loadDoctors && onLoadDoctors()
    loadDoctor && onLoadDoctor()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDoctors, loadDoctor])

  const onLoadDoctors = async () => {
    try {
      setLoad(true)
      let {data} = await getDoctors({
        params: searchParams,
        newCancelToken: newCancelToken()
      })
      setDoctors(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onLoadDoctor = async () => {
    try {
      setLoad(true)
      let {data} = await getDoctor({
        dni: doctor_dni,
        newCancelToken: newCancelToken()
      })
      setDoctor(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onCreateDoctor = async (body) => {
    try {
      setLoad(true)
      let { data } = await createDoctor({
        data: body,
        newCancelToken: newCancelToken()
      })
      setDoctor(data)
      setLoad(false)
      history.push(`/doctors/${data.dni}`)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onUpdateDoctor = async (body) => {
    try {
      setLoad(true)
      let { data } = await updateDoctor({
        data: body,
        newCancelToken: newCancelToken()
      })
      setDoctor(data)
      setLoad(false)
      history.push(`/doctors/${data.dni}`)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onDeleteDoctor = async (body) => {
    try {
      setLoad(true)
      let {data} = await deleteDoctor({
        data: body,
        newCancelToken: newCancelToken()
      })
      setDoctor(data)
      setLoad(false)
      history.push("/doctors")
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  return {
    loadingDoctors: load,
    doctor,
    doctors,
    onCreateDoctor,
    onUpdateDoctor,
    onDeleteDoctor
  }
}

export default useDoctorResources