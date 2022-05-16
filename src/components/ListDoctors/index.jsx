import React from 'react'
import useDoctorResources from '../../hooks/useDoctorResources'
import CardUser from '../Shared/CardUser'

const ListDoctors = () => {
  const { loadingDoctors, doctors } = useDoctorResources({
    loadDoctors: true,
    loadDoctor: false
  })

  return (
    <>
      {loadingDoctors && <p>Cargando doctores...</p>}
      {(doctors || []).map((doctor, i) => (
        <CardUser key={i} data={doctor} entity="doctors" />
      ))}
    </>
  )
}

export default ListDoctors