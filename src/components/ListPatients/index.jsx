import React, {useState} from 'react'
import usePatientResources from '../../hooks/usePatientResources'
import CardUser from '../Shared/CardUser'
import FilterList from '../Shared/FilterList'
import "./ListPatients.css"

const ListPatients = () => {
  const [filters, setFilters] = useState({})
  const { loadingPatients, patients, setApplyFilters } = usePatientResources({
    loadPatients: true,
    loadPatient: false,
    searchParams: {
      from: 1,
      size: 10,
      filters
    }
  })

  const onApplyFilters = (e) => {
    e.preventDefault()
    let full_name = e.target.full_name?.value
    let dni = e.target.dni?.value
    let gender = e.target.gender?.value
    const currentFilters = {
      full_name,
      dni,
      gender: gender === "all" ? "" : gender
    }
    setFilters(currentFilters)
    setApplyFilters(true)
  }

  return (
    <>
      <FilterList onApplyFilters={onApplyFilters} routeCreate={"/patients/new"}>
        <input
          className="filter_list-patient-input"
          type="text"
          placeholder="Buscar por nombre"
          name="full_name"
        />
        <input
          className="filter_list-patient-input"
          type="number"
          placeholder="Buscar por dni"
          name="dni"
        />
        <p className="labelish">Género:</p>
        <div className="filter_list-patient-radio-group">
          <div className="filter_list-patient-radio-label">
            <label htmlFor="all-gender-filter">
              <input id="all-gender-filter" name="gender" type="radio" value="all" defaultChecked="true" />
              Ambos
            </label>
          </div>
          <div className="filter_list-patient-radio-label">
            <label htmlFor="fem-gender-filter">
              <input id="fem-gender-filter" name="gender" type="radio" value="female" />
              F
            </label>
          </div>
          <div className="filter_list-patient-radio-label">
            <label htmlFor="male-gender-filter">
              <input id="male-gender-filter" name="gender" type="radio" value="male" />
              M
            </label>
          </div>
        </div>
      </FilterList>
      {loadingPatients ? <p>Cargando patientes...</p> : (
        (patients || []).map((patient, i) => (
          <CardUser key={i} data={patient} entity="patients" />
        ))
      )}
    </>
  )
}

export default ListPatients