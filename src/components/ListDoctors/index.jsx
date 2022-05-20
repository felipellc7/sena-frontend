import React, {useState} from 'react'
import useDoctorResources from '../../hooks/useDoctorResources'
import useSpecialtyResources from '../../hooks/useSpecialtyResources'
import CardUser from '../Shared/CardUser'
import FilterList from '../Shared/FilterList'
import "./ListDoctors.css"

const ListDoctors = () => {
  const [filters, setFilters] = useState({})
  const { loadingDoctors, doctors, setApplyFilters } = useDoctorResources({
    loadDoctors: true,
    loadDoctor: false,
    searchParams: {
      from: 1,
      size: 10,
      filters
    }
  })
  const { specialties } = useSpecialtyResources({
    loadSpecialties: true,
  })

  const onApplyFilters = (e) => {
    e.preventDefault()
    let full_name = e.target.full_name?.value
    let dni = e.target.dni?.value
    let gender = e.target.gender?.value
    let specialty_id = e.target.specialty_id?.value
    const currentFilters = {
      full_name,
      dni,
      specialty_id: specialty_id === "all" ? "" : specialty_id,
      gender: gender === "all" ? "" : gender
    }
    setFilters(currentFilters)
    setApplyFilters(true)
  }

  return (
    <>
      <FilterList onApplyFilters={onApplyFilters} routeCreate={"/doctors/new"}>
        <input
          className="filter_list-doctor-input"
          type="text"
          placeholder="Buscar por nombre"
          name="full_name"
        />
        <input
          className="filter_list-doctor-input"
          type="number"
          placeholder="Buscar por dni"
          name="dni"
        />
        <select className="filter_list-doctor-input" name="specialty_id">
          <option value="" disabled>Seleccione una especialidad</option>
          <option value="all">Todas las especialidades</option>
          {(specialties || []).map(({id, name}) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <p className="labelish">Género:</p>
        <div className="filter_list-doctor-radio-group">
          <div className="filter_list-doctor-radio-label">
            <label htmlFor="all-gender-filter">
              <input id="all-gender-filter" name="gender" type="radio" value="all" defaultChecked="true" />
              Ambos
            </label>
          </div>
          <div className="filter_list-doctor-radio-label">
            <label htmlFor="fem-gender-filter">
              <input id="fem-gender-filter" name="gender" type="radio" value="female" />
              F
            </label>
          </div>
          <div className="filter_list-doctor-radio-label">
            <label htmlFor="male-gender-filter">
              <input id="male-gender-filter" name="gender" type="radio" value="male" />
              M
            </label>
          </div>
        </div>
      </FilterList>
      {loadingDoctors ? <p>Cargando doctores...</p> : (
        (doctors || []).map((doctor, i) => (
          <CardUser key={i} data={doctor} entity="doctors" />
        ))
      )}
    </>
  )
}

export default ListDoctors