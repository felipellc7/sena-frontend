import React from 'react'
import "./CardUser.css"

const CardUser = ({data, entity}) => {
  const gender = data?.gender && data.gender === "male" ? "M" : "F"
  const getEntity = (ent) => {
    const types = {
      patient: "Paciente",
      doctor: "Doctor",
      admin: "Admin",
      default: ""
    }
    return types.hasOwnProperty(ent) ? types[ent] : types.default
  }

  return (
    <>
      <div className="card-user__container">
        <div className="card-user__body-content">
          <p className="card-user__body-content__title">
            <span>{getEntity(data.role)} </span>{`${data?.full_name}`}
          </p>
          <p><span>Identificación: </span>{data?.dni}</p>
          <p><span>Sexo: </span>{ gender}</p>
          <p><span>Email: </span>{data?.email}</p>
          <p><span>Teléfono: </span>{data?.phone}</p>
          {data?.specialty?.name && (
            <p><span>Especialidad: </span>{data?.specialty?.name}</p>
          )}
        </div>
        <div className="card-user__body-navigate">
          <a href={`/${entity}/${data?.dni}`}>Ver detalle</a>
        </div>
      </div>
    </>
  )
}

export default CardUser
