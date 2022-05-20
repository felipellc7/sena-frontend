import {useState, useEffect} from 'react'
import {
  getSpecialties,
  getSpecialty,
  createSpecialty,
  updateSpecialty,
  deleteSpecialty
} from '../services/specialtyServices'
import useTokenSettings from './useTokenSettings'
import useGetRequestErrors from './useGetRequestErrors'

const useSpecialtyResources = ({
  loadSpecialties = false,
  loadSpecialty = false,
  specialty_id,
  searchParams = {}
}) => {
  const {inspectError} = useGetRequestErrors()
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const [specialty, setSpecialty] = useState(null)
  const [specialties, setSpecialties] = useState(null)

  useEffect(() => {
    loadSpecialties && onLoadSpecialties()
    loadSpecialty && onLoadSpecialty()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadSpecialties, loadSpecialty])

  const onLoadSpecialties = async () => {
    try {
      setLoad(true)
      let {data: {records}} = await getSpecialties({
        params: searchParams,
        newCancelToken: newCancelToken()
      })
      setSpecialties(records)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onLoadSpecialty = async () => {
    try {
      setLoad(true)
      let {data} = await getSpecialty({
        id: specialty_id,
        newCancelToken: newCancelToken()
      })
      setSpecialty(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onCreateSpecialty = async (body) => {
    try {
      setLoad(true)
      let {data} = await createSpecialty({
        data: body,
        newCancelToken: newCancelToken()
      })
      setSpecialty(data)
      setLoad(false)
      window.location.href = `/specialties/${data.id}`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onUpdateSpecialty = async (body) => {
    try {
      setLoad(true)
      let {data} = await updateSpecialty({
        id: specialty_id,
        data: body,
        newCancelToken: newCancelToken()
      })
      setSpecialty(data)
      setLoad(false)
      window.location.href = `/specialties/${data.id}`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  const onDeleteSpecialty = async () => {
    try {
      setLoad(true)
      await deleteSpecialty({
        id: specialty_id,
        newCancelToken: newCancelToken()
      })
      setLoad(false)
      window.location.href = `/specialties`
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  return {
    loadingSpecialties: load,
    specialty,
    specialties,
    onCreateSpecialty,
    onUpdateSpecialty,
    onDeleteSpecialty
  }
}

export default useSpecialtyResources