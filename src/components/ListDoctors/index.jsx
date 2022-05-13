import React from 'react'
import useDoctorResources from '../../hooks/useDoctorResources'

const ListDoctors = () => {
  const { load, doctors } = useDoctorResources({
    loadDoctors: true,
    loadDoctor: false
  })
  console.log(doctors)

  return (
    <>
      <pre style={{whiteSpace: 'pre-wrap'}}>
        {JSON.stringify(doctors, null, 2)}
      </pre>
    </>
  )
}

export default ListDoctors