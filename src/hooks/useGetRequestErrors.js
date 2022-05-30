import {useContext, useCallback } from 'react';
import {StoreContext} from './../store/context/storeContext';
import { logout } from './../store/actions/storeActions';
import Swal from 'sweetalert2';

const useGetRequestErrors = () => {
  const {dispatch} = useContext(StoreContext);

  const inspectError = useCallback (error => {
    if (error.response) {
      const {status, data} = error.response;
      if (status === 401) {
        // dispatch(setErrorReq(data));
        alert("ERROR \n" + JSON.stringify(data))
        dispatch(logout());
      } else {
        // alert("ERROR \n" + JSON.stringify(data))
        // dispatch(setErrorReq(data));
        Swal.fire({
          title: 'Error',
          text: JSON.stringify(data),
          icon: 'error',
        })
      }
    }
  }, [dispatch]);

  return {
    inspectError
  }
}

export default useGetRequestErrors;