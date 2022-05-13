import React from 'react'
import './FormAuthentication.css'

const FormAuthentication = () => {
  return (
    <>
      <div className="login__container">
        <h1 className="login__title">Iniciar Sesión</h1>
        <form className="login__form">
          <div className="login__form-group">
            <label for="usertype">Tipo de usuario</label>
            <select className="login__textbox" name="usertype" id="usertype">
              <option value="">Seleccione una opción</option>
              <option value="1">Administrador</option>
              <option value="2">Médico</option>
              <option value="3">Paciente</option>
            </select>
          </div>
          <div className="login__form-group">
            <label for="username">Usuario</label>
            <input className="login__textbox" type="text" name="username" id="username" placeholder="Ingrese su usuario" />
          </div>
          <div className="login__form-group">
            <label for="password">Contraseña</label>
            <input className="login__textbox" type="password" name="password" id="password" placeholder="Ingrese su contraseña" />
          </div>
          <div className="login__form-group">
            <input type="submit" className="login__button" value="Ingresar" />
          </div>
        </form>
      </div>
    </>
  )
}

export default FormAuthentication