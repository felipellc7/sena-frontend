import React from 'react'
import "./FormDoctor.css"
import useSpecialtyResources from '../../hooks/useSpecialtyResources'
import useDoctorResources from '../../hooks/useDoctorResources'
import useForm from '../../hooks/useForm'
import { defaultValues, validationSchema } from "./config"
import Swal from 'sweetalert2'

const FormDoctor = ({specialty}) => {
  const { handleSubmit, register, errors } = useForm(validationSchema, {defaultValues})
  const { specialties } = useSpecialtyResources({
    loadSpecialties: true,
  })
  const { onCreateDoctor, onUpdateDoctor } = useDoctorResources({})

  const onSubmitForm = async (data) => {
    try {
      const body = {doctor: data}
      if (specialty) {
        await onUpdateDoctor(body)
      } else {
        await onCreateDoctor(body)
      }
      Swal.fire({
        title: 'Hecho',
        text: 'Doctor guardado con éxito',
        icon: 'success',
      })
    } catch (error) {
      console.log(error)
    }
  }

  console.log("errors", errors)

  return (
    <div className="doctors__content">
      <form action="" className="doctors__form" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="doctors__form-container-grid">
          <div className="doctors__form-group">
            <label htmlFor="first_name">Nombres</label>
            <input {...register("first_name")} className="doctors__textbox" type="text" name="first_name" id="first_name" placeholder="Ingrese nombres" />
          </div>
          <div className="doctors__form-group">
            <label htmlFor="last_name">Apellidos</label>
            <input {...register("last_name")} className="doctors__textbox" type="text" name="last_name" id="last_name" placeholder="Ingrese apellidos" />
          </div>
        </div>
        <div className="doctors__form-container-grid">
          <div className="doctors__form-group">
            <label htmlFor="dni">Numero de Identificación</label>
            <input {...register("dni")} className="doctors__textbox" type="number" name="dni" id="dni" placeholder="Ingrese numero de identificación" />
          </div>
          <div className="doctors__form-group">
            <label htmlFor="gender">Género</label>
            <select {...register("gender")} className="doctors__textbox" name="gender" id="gender">
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>
        </div>
        <div className="doctors__form-container-grid">
          <div className="doctors__form-group">
            <label htmlFor="specialty_id">Especialidad</label>
            <select {...register("specialty_id")} className="doctors__textbox" name="specialty_id" id="specialty_id">
              <option value="">Seleccione una opción</option>
              {(specialties || []).map(({id, name}) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="doctors__form-group">
            <label htmlFor="phone">Celular</label>
            <input {...register("phone")} className="doctors__textbox" type="number" name="phone" id="phone" placeholder="Ingrese celular" />
          </div>
        </div>
        <div className="doctors__form-container-grid">
          <div className="doctors__form-group">
            <label htmlFor="email">Correo electronico</label>
            <input {...register("email")} className="doctors__textbox" type="email" name="email" id="email" placeholder="Ingrese correo electronico" />
          </div>
          <div className="doctors__form-group">
            <label htmlFor="password">Contraseña</label>
            <input {...register("password")} className="doctors__textbox" type="password" name="password" id="password" placeholder="Ingrese contraseña" />
          </div>
        </div>
        <div className="doctors__form-container-grid">
          <div className="doctors__form-group">
            <label htmlFor="active">Estado</label>
            <select {...register("active")} className="doctors__textbox" name="active" id="active">
              <option value="true">Activo</option>
              <option value="false">No Activo</option>
            </select>
          </div>
        </div>
        <div className="doctors__form-group">
          <input type="submit" className="doctors__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormDoctor