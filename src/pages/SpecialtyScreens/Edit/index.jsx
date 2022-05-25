import React, {useEffect} from 'react'

const SpecialtyEdit = () => {

  useEffect(() => {
    localStorage.setItem('currentScreen', 'Editar Especialidad')
  }, [])

  return (
    <div>SpecialtyEdit</div>
  )
}

export default SpecialtyEdit