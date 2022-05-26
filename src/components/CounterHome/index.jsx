import React from 'react'
import "./CounterHome.css"
import useHelperServiceResources from '../../hooks/useHelperServiceResources'

const CounterHome = () => {
  const {entities, loadHelper} = useHelperServiceResources({
    loadEntitiesGroup: true
  })

  const translateEntities = {
    consulting_rooms: "consultorios",
    doctors: "doctores",
    patients: "pacientes",
    appointments: "citas",
    schedules: "agendas",
    specialties: "especialidades"
  }

  return (
    loadHelper ? (
      <p>Cargando...</p>
    ) : (
      <>
        <div className="counter-home__container">
          {Object.entries(entities || {}).map(([key, value]) => (
            <a key={key} href={`/${key}`} className="counter-home__card">
              <div className="counter-home__card-title">
                <h3>{translateEntities[key]}</h3>
              </div>
              <div className="counter-home__card-content">
                <h2>{value}</h2>
              </div>
            </a>
          ))}
        </div>
      </>
    )
  )
}

export default CounterHome