// import React, {useContext} from 'react'
import {useState, useEffect} from 'react'
import logoSena from '../../assets/images/logo.png'
import "./Layout.css"
import { logout } from '../../store/actions/storeActions'
// import { StoreContext } from '../../store/context/storeContext';

const Layout = ({children}) => {
  // const { currentRouteTitle } = useContext(StoreContext)
  const [currentRouteTitle, setCurrentRouteTitle] = useState("_")
  const route = localStorage.getItem("currentRouteTitle")

  useEffect(() => {
    setCurrentRouteTitle(route)
  }, [route])

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
              <li><a href="/doctors">Doctores</a></li>
              <li><a href="/patients">Pacientes</a></li>
              <li><a href="/appointments">Citas</a></li>
              <li><a href="/schedules">Agenda</a></li>
              <li><a href="/specialties">Especialidades</a></li>
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
            <h2>{currentRouteTitle}</h2>
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