import { useState, useEffect, useContext } from "react"
import { authenticateUser } from "../services/authServices"
import useTokenSettings from "./useTokenSettings"
import {
  loginError,
  loginStart,
  loginSuccess,
} from "../store/actions/storeActions"
import { StoreContext } from "../store/context/storeContext"

const useLogin = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const { dispatch } = useContext(StoreContext)

  useEffect(() => {
    if (user) {
      dispatch(loginSuccess({user}))
      window.location.reload()
    }
  }, [user, dispatch])
  
  const onLogin = async (credentials) => {
    try {
      setError(null)
      loginStart()
      setLoad(true)
      const { data } = await authenticateUser({
        credentials,
        newCancelToken: newCancelToken()
      })
      setUser(data)
    } catch (error) {
      loginError()
      setLoad(false)
      setError(error.response.status === 401 ? "Credenciales Inválidas" : "Error") 
    }
  }

  return {
    onLogin,
    loadingLogin: load,
    errorLogin: error
  }

}

export default useLogin