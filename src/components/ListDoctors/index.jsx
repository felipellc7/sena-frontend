import React from 'react'
import useDoctorResources from '../../hooks/useDoctorResources'
import CardUser from '../Shared/CardUser'
import FilterList from '../Shared/FilterList'
import "./ListDoctors.css"

const ListDoctors = () => {
  const { loadingDoctors, doctors } = useDoctorResources({
    loadDoctors: true,
    loadDoctor: false
  })

  const onApplyFilters = (e) => {
    e.preventDefault()
    const currentFilters = {
      name: e.target.name?.value,
      dni: e.target.dni?.value,
      specialty: e.target.specialty?.value,
      gender: e.target.gender?.value
    }
    console.log('Aplicar filtros', currentFilters)
  }

  return (
    <>
      <FilterList onApplyFilters={onApplyFilters}>
        <input
          className="filter_list-doctor-input"
          type="text"
          placeholder="Buscar por nombre"
          name="name"
        />
        <input
          className="filter_list-doctor-input"
          type="number"
          placeholder="Buscar por dni"
          name="dni"
        />
        <p class="labelish">Género:</p>
        <div class="filter_list-doctor-radio-group">
          <div class="filter_list-doctor-radio-label">
            <label htmlFor="all-gender-filter">
              <input id="all-gender-filter" name="gender" type="radio" value="all" />
              Ambos
            </label>
          </div>
          <div class="filter_list-doctor-radio-label">
            <label htmlFor="fem-gender-filter">
              <input id="fem-gender-filter" name="gender" type="radio" value="female" />
              F
            </label>
          </div>
          <div class="filter_list-doctor-radio-label">
            <label htmlFor="male-gender-filter">
              <input id="male-gender-filter" name="gender" type="radio" value="male" />
              M
            </label>
          </div>
        </div>
      </FilterList>
      {loadingDoctors && <p>Cargando doctores...</p>}
      {(doctors || []).map((doctor, i) => (
        <CardUser key={i} data={doctor} entity="doctors" />
      ))}
    </>
  )
}

export default ListDoctors