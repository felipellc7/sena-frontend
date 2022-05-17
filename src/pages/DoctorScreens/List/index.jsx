import React, { useEffect, useContext} from 'react'
import { StoreContext } from '../../../store/context/storeContext';
import { handleRouteChange } from '../../../store/actions/storeActions';
import ListDoctors from '../../../components/ListDoctors'

const DoctorList = () => {
  const { dispatch } = useContext(StoreContext)

  useEffect(() => {
    // dispatch(handleRouteChange('Doctores'))
  }, [dispatch])

  return (
    <ListDoctors />
  )
}

export default DoctorList