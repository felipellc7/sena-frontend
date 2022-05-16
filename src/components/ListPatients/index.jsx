import React from 'react'
import usePatientResources from '../../hooks/usePatientResources'
import CardUser from '../Shared/CardUser'

const ListPatients = () => {
  const { loadingPatients, patients } = usePatientResources({
    loadPatients: true,
    loadPatient: false
  })

  return (
    <>
      {loadingPatients && <p>Cargando pacientes...</p>}
      {(patients || []).map((patient, i) => (
        <CardUser key={i} data={patient} entity="patients" />
      ))}
    </>
  )
}

export default ListPatients