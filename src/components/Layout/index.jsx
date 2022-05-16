import React from 'react'
import logoSena from '../../assets/images/logo.png'
import "./Layout.css"
import { logout } from '../../store/actions/storeActions'

const Layout = ({children}) => {
  return (
    <>
      <div className="layout__container">
        <div className="layout__sidebar">
          <div>
            <img className="layout__logo" src={logoSena} alt="logo" />
          </div>
          <nav className="layout__navigation">
            <ul>
              <li><a href="/dashboard">Inicio</a></li>
              <li><a href="/doctors">Medicos</a></li>
              <li><a href="/patients">Pacientes</a></li>
              <li><a href="/appointments">Citas</a></li>
              <li><a href="/schedule">Agenda</a></li>
              <li><a href="/consulting_rooms">Consultorios</a></li>
            </ul>
            <ul>
              <li><a href="/settings">Configuración</a></li>
              <li><span onClick={() => logout()}>Cerrar Sesión</span></li>
            </ul>
          </nav>
        </div>
        <div className="layout__sub-container">
          <header className="layout__header">
            <h2>TITULO SECCION</h2>
          </header>
          <main className="layout__main">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout