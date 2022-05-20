import React, {useEffect} from 'react'
import "./FormPatient.css"
import usePatientResources from '../../hooks/usePatientResources'
import useForm from '../../hooks/useForm'
import { defaultValues, validationSchema, fillForm } from "./config"
import Swal from 'sweetalert2'

const FormPatient = ({patient}) => {
  const { handleSubmit, register, errors, reset } = useForm(
    validationSchema(patient), {
      defaultValues
    }
  )
  const { onCreatePatient, onUpdatePatient } = usePatientResources({})

  useEffect(() => {
    if (patient) {
      fillForm(reset, patient)
    }
    // eslint-disable-next-line
  }, [patient])


  const onSubmitForm = async (data) => {
    try {
      const body = {patient: data}
      if (patient) {
        await onUpdatePatient(body)
      } else {
        await onCreatePatient(body)
      }
      Swal.fire({
        title: 'Hecho',
        text: 'Paciente guardado con éxito',
        icon: 'success',
      })
    } catch (error) {
      console.log(error)
    }
  }

  console.log("errors", errors)

  return (
    <div className="patients__content">
      <form action="" className="patients__form" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="patients__form-container-grid">
          <div className="patients__form-group">
            <label htmlFor="first_name">Nombres</label>
            <input {...register("first_name")} className="patients__textbox" type="text" name="first_name" id="first_name" placeholder="Ingrese nombres" />
          </div>
          <div className="patients__form-group">
            <label htmlFor="last_name">Apellidos</label>
            <input {...register("last_name")} className="patients__textbox" type="text" name="last_name" id="last_name" placeholder="Ingrese apellidos" />
          </div>
        </div>
        <div className="patients__form-container-grid">
          <div className="patients__form-group">
            <label htmlFor="dni">Numero de Identificación</label>
            <input {...register("dni")} disabled={Boolean(patient)} className="patients__textbox" type="number" name="dni" id="dni" placeholder="Ingrese numero de identificación" />
          </div>
          <div className="patients__form-group">
            <label htmlFor="gender">Género</label>
            <select {...register("gender")} className="patients__textbox" name="gender" id="gender">
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>
        </div>
        <div className="patients__form-container-grid">
          <div className="patients__form-group">
            <label htmlFor="email">Correo electronico</label>
            <input {...register("email")} className="patients__textbox" type="email" name="email" id="email" placeholder="Ingrese correo electronico" />
          </div>
          {Boolean(!patient) && <div className="patients__form-group">
            <label htmlFor="password">Contraseña</label>
            <input {...register("password")} className="patients__textbox" type="password" name="password" id="password" placeholder="Ingrese contraseña" />
          </div>}
        </div>
        <div className="patients__form-container-grid">
          <div className="patients__form-group">
            <label htmlFor="phone">Celular</label>
            <input {...register("phone")} className="patients__textbox" type="number" name="phone" id="phone" placeholder="Ingrese celular" />
          </div>
        </div>
        <div className="patients__form-container-grid">
          <div className="patients__form-group">
            <label htmlFor="active">Estado</label>
            <select {...register("active")} className="patients__textbox" name="active" id="active">
              <option value="true">Activo</option>
              <option value="false">No Activo</option>
            </select>
          </div>
        </div>
        <div className="patients__form-group">
          <input type="submit" className="patients__button" value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default FormPatient