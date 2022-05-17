import React, { useEffect, useContext} from 'react'
import { StoreContext } from '../../store/context/storeContext';
import { handleRouteChange } from '../../store/actions/storeActions';

const DashboardScreen = () => {
  const { dispatch } = useContext(StoreContext)

  useEffect(() => {
    // dispatch(handleRouteChange('Inicio'))
  }, [])

  return (
    <div>DashboardScreen</div>
  )
}

export default DashboardScreen