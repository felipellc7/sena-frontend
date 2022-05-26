import React, {useEffect} from 'react'
import "./FormConsultingRoom.css"
import useSpecialtyResources from '../../hooks/useSpecialtyResources'
import useConsultingRoomResources from '../../hooks/useConsultingRoomResources'
import useForm from '../../hooks/useForm'
import {
  defaultValues, validationSchema, fillForm
} from "./config"
import Swal from 'sweetalert2'

const FormConsultingRoom = ({consulting_room}) => {
  const { handleSubmit, register, errors, reset } = useForm(
    validationSchema, {
      defaultValues
    }
  )
  const { specialties } = useSpecialtyResources({
    loadSpecialties: true,
  })
  const { onCreateConsultingRoom, onUpdateConsultingRoom } = useConsultingRoomResources({})

  useEffect(() => {
    if (consulting_room) {
      fillForm(reset, consulting_room)
    }
    // eslint-disable-next-line
  }, [consulting_room])

  const onSubmitForm = async (data) => {
    try {
      const body = {consulting_room: data}
      if (consulting_room) {
        await onUpdateConsultingRoom(body)
      } else {
        await onCreateConsultingRoom(body)
      }
      Swal.fire({
        title: 'Hecho',
        text: 'Consultorio guardado con éxito',
        icon: 'success',
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error',
        text: 'No se pudo guardar el consultorio',
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
          <div class="consulting_rooms__form-group">
            <label for="specialty_id">Especialidad</label>
            <select {...register("specialty_id")} class="consulting_rooms__textbox" name="specialty_id" id="specialty_id">
              <option value="">Seleccione una opción</option>
              {(specialties || []).map(specialty => (
                <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="consulting_rooms__form-container-grid">
          <div class="consulting_rooms__form-group">
            <label for="loc_country">Pais</label>
            <input {...register("loc_country")} class="consulting_rooms__textbox" type="text" name="loc_country" id="loc_country" placeholder="Ingrese país" />
          </div>
          <div class="consulting_rooms__form-group">
            <label for="loc_region">Region</label>
            <input {...register("loc_region")} class="consulting_rooms__textbox" type="text" name="loc_region" id="loc_region" placeholder="Ingrese region" />
          </div>
        </div>
        <div class="consulting_rooms__form-container-grid">
          <div class="consulting_rooms__form-group">
            <label for="loc_city">Ciudad</label>
            <input {...register("loc_city")} class="consulting_rooms__textbox" type="text" name="loc_city" id="loc_city" placeholder="Ingrese ciudad" />
          </div>
          <div class="consulting_rooms__form-group">
            <label for="loc_commune">Comuna</label>
            <input {...register("loc_commune")} class="consulting_rooms__textbox" type="text" name="loc_commune" id="loc_commune" placeholder="Ingrese comuna" />
          </div>
        </div>
        <div class="consulting_rooms__form-container-grid">
          <div class="consulting_rooms__form-group">
            <label for="loc_address">Dirección</label>
            <input {...register("loc_address")} class="consulting_rooms__textbox" type="text" name="loc_address" id="loc_address" placeholder="Ingrese dirección" />
          </div>
        </div>
        <div class="consulting_rooms__form-container-grid">
          <div class="consulting_rooms__form-group">
            <label for="loc_description">Descripción</label>
            <textarea {...register("loc_description")} class="consulting_rooms__textbox" type="text" name="loc_description" id="loc_description" placeholder="Ingrese descripcion" />
          </div>
        </div>
        <div class="consulting_rooms__form-group">
          <input type="submit" class="consulting_rooms__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormConsultingRoom