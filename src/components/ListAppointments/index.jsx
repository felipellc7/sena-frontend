import React, {useState} from 'react'
import useAppointmentResources from '../../hooks/useAppointmentResources'
import FilterList from '../Shared/FilterList'
import "./ListAppointments.css"

const statusses = {
  reserved: "Reservado",
  confirmed: "Confirmado",
  in_progress: "En progreso",
  canceled: "Cancelado",
  closed: "Cerrada",
  rescheduled: "Reagendado"
}

const ListAppointments = () => {
  const [filters, setFilters] = useState({})
  const { loadingAppointments, appointments, setApplyFilters } = useAppointmentResources({
    loadAppointments: true,
    searchParams: {
      from: 1,
      size: 10,
      filters
    }
  })

  const onApplyFilters = (e) => {
    e.preventDefault()
    let schedule_code = e.target.schedule_code?.value
    let status = e.target.status?.value
    let doctor_dni = e.target.doctor_dni?.value
    let patient_dni = e.target.patient_dni?.value
    let date = e.target.date?.value
    const currentFilters = {
      schedule_code,
      status: status === "all" ? "" : status,
      doctor_dni,
      patient_dni,
      date
    }
    setFilters(currentFilters)
    setApplyFilters(true)
  }

  return (
    <>
      <FilterList onApplyFilters={onApplyFilters} routeCreate={"/appointments/new"}>
        <input
          className="filter_list-appointment-input"
          type="text"
          placeholder="Buscar por codigo de agenda"
          name="schedule_code"
        />
        <input
          className="filter_list-appointment-input"
          type="number"
          placeholder="Buscar por dni de doctor"
          name="doctor_dni"
        />
        <input
          className="filter_list-appointment-input"
          type="number"
          placeholder="Buscar por dni de paciente"
          name="patient_dni"
        />
        <input
          className="filter_list-appointment-input"
          type="date"
          placeholder="Buscar por fecha"
          name="date"
        />
        <select className="filter_list-appointment-input" name="status">
          <option value="all">Todos los estados</option>
          {Object.keys(statusses).map(status => (
            <option key={status} value={status}>{statusses[status]}</option>
          ))}
        </select>
      </FilterList>
      {loadingAppointments ? <p>Cargando citas...</p> : (
        (appointments || []).map((appointment, i) => (
          <CardAppointment key={i} data={appointment} entity="appointments" />
        ))
      )}
    </>
  )
}

const CardAppointment = ({data}) => {
  const translateStatus = status => {
    return statusses.hasOwnProperty(status) ? statusses[status] : "Desconocido"
  }

  return (
    <>
      <div className="card-appointment__container">
        <div className="card-appointment__body-content">
          <p className="card-appointment__body-content__title">
            <span>Doctor: </span>
            {`${data?.doctor?.full_name}`}
            &nbsp;- <i>{data?.doctor?.dni}</i>
          </p>
          <p className="card-appointment__body-content__title">
            <span>Paciente: </span>
            {`${data?.patient?.full_name}`}
            &nbsp;- <i>{data?.patient?.dni}</i>
          </p>
          <hr />
          <p><span>Fecha: </span>{data?.schedule?.date}</p>
          <p><span>Especialidad: </span>{data?.doctor?.specialty?.name}</p>
          <p><span>Estado: </span>{ translateStatus(data?.status) }</p>
        </div>
        <div className="card-appointment__body-navigate">
          <a href={`/appointments/${data?.id}`}>Ver detalle</a>
        </div>
      </div>
    </>
  )
}

export default ListAppointments