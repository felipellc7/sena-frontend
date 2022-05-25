import React, {useEffect} from 'react'

const SpecialtyNew = () => {

  useEffect(() => {
    localStorage.setItem('currentScreen', 'Crear Especialidad')
  }, [])

  return (
    <div>SpecialtyNew</div>
  )
}

export default SpecialtyNew