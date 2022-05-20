import React from 'react'
import "./ButtonsDetail.css"
import Swal from 'sweetalert2'

const ButtonsDetail = ({paramEdit, entity, actionDelete}) => {
  const handleDelete = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        deleteRecord()
      }
    })
  }

  const deleteRecord = async () => {
    try {
      await actionDelete(paramEdit)
      Swal.fire({
        title: 'Hecho',
        text: 'Registro eliminado con éxito',
        icon: 'success',
      })
      window.location.href = `/${entity}`
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo eliminar el registro',
        icon: 'error',
      })
    }
  }

  return (
    <div className="buttons-detail">
      <a className="button-detail-edit" href={`/${entity}/edit/${paramEdit}`}>Editar</a>
      <button className="button-detail-delete" onClick={() => handleDelete()}>Eliminar</button>
    </div>
  )
}

export default ButtonsDetail
