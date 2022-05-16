import React from 'react'
import './FormAuthentication.css'
import useForm from "./../../hooks/useForm";
import useLogin from '../../hooks/useLogin';
import { defaultValues, validationSchema } from "./config"

const FormAuthentication = () => {
  const { handleSubmit, register, errors } = useForm(validationSchema, {defaultValues})
  const {onLogin, errorLogin, loadingLogin} = useLogin()
  console.log(errorLogin)

  return (
    <>
      <div className="login__container">
        <h1 className="login__title">Iniciar Sesión</h1>
        <form className="login__form" onSubmit={handleSubmit(data => onLogin(data))}>
          <div className="login__form-group">
            {/* <label htmlFor="role">Tipo de usuario</label> */}
            <select
              className="login__textbox"
              id="role"
              {...register("role")}
              error={errors.role}
            >
              <option value="">Seleccione una opción</option>
              <option value="admin">Administrador</option>
              <option value="doctor" disabled>Médico</option>
              <option value="patient" disabled>Paciente</option>
            </select>
          </div>
          <div className="login__form-group">
            <label htmlFor="dni">DNI</label>
            <input
              className="login__textbox"
              type="text"
              placeholder="Ingrese su DNI"
              id="dni"
              {...register("dni")}
              error={errors.dni}
            />
          </div>
          <div className="login__form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              className="login__textbox"
              type="password"
              placeholder="Ingrese su contraseña"
              id="password"
              {...register("password")}
              error={errors.password}
            />
          </div>
          <div className="login__form-group">
            <input
              type="submit"
              className="login__button"
              value={loadingLogin ? "Espere..." : "Ingresar"}
              disabled={loadingLogin}
            />
          </div>
          {errorLogin && <p className="login__error">{errorLogin}</p>}
        </form>
      </div>
    </>
  )
}

export default FormAuthentication