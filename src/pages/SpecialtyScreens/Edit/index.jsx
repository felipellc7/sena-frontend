import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useSpecialtyResources from '../../../hooks/useSpecialtyResources'
import FormSpecialty from '../../../components/FormSpecialty'

const SpecialtyEdit = () => {
  const { specialtyId } = useParams()
  const { specialty } = useSpecialtyResources({
    loadSpecialty: true,
    specialty_id: specialtyId
  })

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', 'Editar Especialidad')
  }, [])

  return (
    <FormSpecialty specialty={specialty} />
  )
}

export default SpecialtyEdit