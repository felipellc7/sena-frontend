import React, { useEffect } from 'react'
import CounterHome from '../../components/CounterHome'

const DashboardScreen = () => {

  useEffect(() => {
    localStorage.setItem('currentRouteTitle', "Inicio")
  }, [])

  return (
    <CounterHome />
  )
}

export default DashboardScreen