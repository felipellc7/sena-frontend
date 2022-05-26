import React, {useState} from 'react'
import useSpecialtyResources from '../../hooks/useSpecialtyResources'
import FilterList from '../Shared/FilterList'
import "./ListSpecialties.css"
import ButtonsDetail from '../Shared/ButtonsDetail'

const ListSpecialties = () => {
  const [filters, setFilters] = useState({})
  const { specialties, loadSpecialties, setApplyFilters } = useSpecialtyResources({
    loadSpecialties: true,
    searchParams: {
      from: 1,
      size: 10,
      filters
    }
  })

  const onApplyFilters = (e) => {
    e.preventDefault()
    let name = e.target.name?.value
    const currentFilters = {name}
    setFilters(currentFilters)
    setApplyFilters(true)
  }

  return (
    <>
      <FilterList onApplyFilters={onApplyFilters} routeCreate={"/specialties/new"}>
        <input
          className="filter_list-specialty-input"
          type="text"
          placeholder="Buscar por nombre"
          name="name"
        />
      </FilterList>
      {loadSpecialties ? <p>Cargando especialidades...</p> : (
        (specialties || []).map((specialty, i) => (
          <CardSpecialty
            key={i}
            specialty={specialty}
          />
        ))
      )}
    </>
  )
}

const CardSpecialty = ({specialty}) => {
  const { onDeleteSpecialty } = useSpecialtyResources({
    specialty_id: specialty.id,
  })

  return (
    <div className="card-specialty__container">
      <div className="card-specialty__body-content">
        <p className="card-specialty__body-content__title">
          {specialty?.name}
        </p>
      </div>
      <div className="card-specialty__body-navigate">
        <ButtonsDetail
          entity={"specialties"}
          paramEdit={specialty?.id}
          actionDelete={onDeleteSpecialty}
        />
      </div>
    </div>
  )
}

export default ListSpecialties