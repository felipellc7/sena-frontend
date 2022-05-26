import React, {useEffect} from 'react'
import "./FormSpecialty.css"
import useSpecialtyResources from '../../hooks/useSpecialtyResources'
import useForm from '../../hooks/useForm'
import {
  defaultValues, validationSchema, fillForm
} from "./config"
import Swal from 'sweetalert2'

const FormSpecialty = ({specialty}) => {
  const { handleSubmit, register, errors, reset } = useForm(
    validationSchema, {
      defaultValues
    }
  )
  const { onCreateSpecialty, onUpdateSpecialty } = useSpecialtyResources({})

  useEffect(() => {
    if (specialty) {
      fillForm(reset, specialty)
    }
    // eslint-disable-next-line
  }, [specialty])

  const onSubmitForm = async (data) => {
    try {
      const body = {specialty: data}
      if (specialty) {
        await onUpdateSpecialty(body)
      } else {
        await onCreateSpecialty(body)
      }
      Swal.fire({
        title: 'Hecho',
        text: 'Especialidad guardada con éxito',
        icon: 'success',
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error',
        text: 'No se pudo guardar la especialidad',
        icon: 'error',
      })
    }
  }

  console.log("errors", errors)

  return (
    <div class="consulting_rooms__content">
      <form action="" class="consulting_rooms__form" onSubmit={handleSubmit(onSubmitForm)}>
        <div class="consulting_rooms__form-container-grid">
          <div class="consulting_rooms__form-group">
            <label for="name">Nombre</label>
            <input {...register("name")} class="consulting_rooms__textbox" type="text" name="name" id="name" placeholder="Ingrese nombre" />
          </div>
        </div>
        <div class="consulting_rooms__form-group">
          <input type="submit" class="consulting_rooms__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormSpecialty