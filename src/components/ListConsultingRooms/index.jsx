import React, {useState} from 'react'
import useConsultingRoomResources from '../../hooks/useConsultingRoomResources'
import useSpecialtyResources from '../../hooks/useSpecialtyResources'
import FilterList from '../Shared/FilterList'
import "./ListConsultingRooms.css"
import ButtonsDetail from '../Shared/ButtonsDetail'

const ListConsultingRooms = () => {
  const [filters, setFilters] = useState({})
  const { consultingRooms, loadingConsultingRooms, setApplyFilters } = useConsultingRoomResources({
    loadConsultingRooms: true,
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
    let specialty_id = e.target.specialty_id?.value
    const currentFilters = {specialty_id}
    setFilters(currentFilters)
    setApplyFilters(true)
  }

  return (
    <>
      <FilterList onApplyFilters={onApplyFilters} routeCreate={"/consulting_rooms/new"}>
        <select className="filter_list-consulting-room-input" name="specialty_id">
          <option value="" disabled>Seleccione una especialidad</option>
          <option value="">Todas las especialidades</option>
          {(specialties || []).map(({id, name}) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </FilterList>
      {loadingConsultingRooms ? <p>Cargando consultorios...</p> : (
        (consultingRooms || []).map((consulting, i) => (
          <CardConsultingRoom
            key={i}
            consulting_room={consulting}
          />
        ))
      )}
    </>
  )
}

const CardConsultingRoom = ({consulting_room}) => {
  const { onDeleteConsultingRoom } = useConsultingRoomResources({
    consulting_room_id: consulting_room.id,
  })

  return (
    <div className="card-consulting-room__container">
      <div className="card-consulting-room__body-content">
        <p className="card-consulting-room__body-content__title">
          {consulting_room?.name} - <i>{consulting_room?.specialty?.name}</i>
        </p>
        <i>{consulting_room?.loc_description}</i>
        <h4>Ubicación:</h4>
        <p>{consulting_room?.loc_country} - {consulting_room?.loc_region}</p>
        <p>{consulting_room?.loc_city} - {consulting_room?.loc_commune}</p>
        <p>{consulting_room?.loc_address}</p>
      </div>
      <div className="card-consulting-room__body-navigate">
        <ButtonsDetail
          entity={"consulting_rooms"}
          paramEdit={consulting_room?.id}
          actionDelete={onDeleteConsultingRoom}
        />
      </div>
    </div>
  )
}

export default ListConsultingRooms