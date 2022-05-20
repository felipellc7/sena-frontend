import {useState, useEffect} from "react"
import {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient
} from "../services/patientServices"
import useTokenSettings from "./useTokenSettings"
import useGetRequestErrors from "./useGetRequestErrors"

const usePatientResources = ({
  loadPatients = false,
  loadPatient = false,
  patient_dni,
  searchParams = {}
}) => {
  const {inspectError} = useGetRequestErrors()
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const [patient, setPatient] = useState(null)
  const [patients, setPatients] = useState(null)
  const [applyFilters, setApplyFilters] = useState(false)

  useEffect(() => {
    loadPatients && onLoadPatients()
    loadPatient && onLoadPatient()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadPatients, loadPatient])

  useEffect(() => {
    if (applyFilters) {
      onLoadPatients()
      setApplyFilters(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyFilters])

  const onLoadPatients = async () => {
    try {
      setLoad(true)
      let {data: {records}} = await getPatients({
        params: searchParams,
        newCancelToken: newCancelToken()
      })
      setPatients(records)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onLoadPatient = async () => {
    try {
      setLoad(true)
      let {data} = await getPatient({
        dni: patient_dni,
        newCancelToken: newCancelToken()
      })
      setPatient(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onCreatePatient = async (body) => {
    try {
      setLoad(true)
      let {data} = await createPatient({
        data: body,
        newCancelToken: newCancelToken()
      })
      setPatient(data)
      setLoad(false)
      window.location.href = `/patients/${data.dni}`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onUpdatePatient = async (body) => {
    try {
      setLoad(true)
      let {data} = await updatePatient({
        data: body,
        newCancelToken: newCancelToken()
      })
      setPatient(data)
      setLoad(false)
      window.location.href = `/patients/${data.dni}`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onDeletePatient = async () => {
    try {
      setLoad(true)
      await deletePatient({
        dni: patient_dni,
        newCancelToken: newCancelToken()
      })
      setPatient(null)
      setLoad(false)
      window.location.href = `/patients`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  return {
    loadingPatients: load,
    patients,
    patient,
    onCreatePatient,
    onUpdatePatient,
    onDeletePatient,
    setApplyFilters
  }
}

export default usePatientResources