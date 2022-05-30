import React, {useState} from 'react'
import useScheduleResources from '../../hooks/useScheduleResources'
import FilterList from '../Shared/FilterList'
import "./ListSchedules.css"
import ButtonsDetail from '../Shared/ButtonsDetail'
import { displayTime } from '../../helpers/dateTimeHelper'

const ListSchedules = () => {
  const [filters, setFilters] = useState({})
  const { schedules, loadSchedules, setApplyFilters } = useScheduleResources({
    loadSchedules: true,
    searchParams: {
      from: 1,
      size: 10,
      filters
    }
  })

  const onApplyFilters = (e) => {
    e.preventDefault()
    let code = e.target.code?.value
    let date = e.target.date?.value
    let time = e.target.time?.value
    let available = e.target.available?.value
    const currentFilters = {
      code,
      date,
      time,
      available: available === "all" ? "" : available
    }
    setFilters(currentFilters)
    setApplyFilters(true)
  }

  return (
    <>
      <FilterList onApplyFilters={onApplyFilters} routeCreate={"/schedules/new"}>
        <input
          className="filter_list-schedule-input"
          type="input"
          placeholder="Buscar por codigo"
          name="code"
        />
        <input
          className="filter_list-schedule-input"
          type="date"
          placeholder="Buscar por nombre"
          name="date"
        />
        <input
          className="filter_list-schedule-input"
          type="time"
          placeholder="Buscar por nombre"
          name="time"
        />
        <p className="labelish">Disponibilidad:</p>
        <div className="filter_list-schedule-radio-group">
          <div className="filter_list-schedule-radio-label">
            <label htmlFor="all-available-filter">
              <input id="all-available-filter" name="available" type="radio" value="all" defaultChecked="true" />
              Ambos
            </label>
          </div>
          <div className="filter_list-schedule-radio-label">
            <label htmlFor="true-available-filter">
              <input id="true-available-filter" name="available" type="radio" value="true" />
              Disponible
            </label>
          </div>
          <div className="filter_list-schedule-radio-label">
            <label htmlFor="false-available-filter">
              <input id="false-available-filter" name="available" type="radio" value="false" />
              No disponible
            </label>
          </div>
        </div>
      </FilterList>
      {loadSchedules ? <p>Cargando especialidades...</p> : (
        (schedules || []).map((schedule, i) => (
          <CardSchedule
            key={i}
            schedule={schedule}
          />
        ))
      )}
    </>
  )
}

const CardSchedule = ({schedule}) => {
  const { onDeleteSchedule } = useScheduleResources({
    schedule_id: schedule.id,
  })

  return (
    <div className="card-schedule__container">
      <div className="card-schedule__body-content">
        <p className="card-schedule__body-content__title">
          {schedule?.code}
        </p>
        <p><strong>Fecha: </strong>{schedule.date} - <strong>Hora: </strong>{displayTime(schedule?.time)}</p>
        <p><strong>Consultorio: </strong>{schedule?.consulting_room?.name}</p>
        <p style={{textAlign: "right"}}>
          <strong style={{color: schedule?.available ? "green" : "red"}}>{schedule?.available ? "Disponible" : "No disponible"}</strong>
        </p>
      </div>
      <div className="card-schedule__body-navigate">
        <ButtonsDetail
          entity={"schedules"}
          paramEdit={schedule?.id}
          actionDelete={onDeleteSchedule}
        />
      </div>
    </div>
  )
}

export default ListSchedules