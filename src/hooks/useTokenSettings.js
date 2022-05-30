import { useEffect, useRef, useContext } from "react"
import axios from "axios"
import { StoreContext } from "./../store/context/storeContext"
import tokenAuth from "./../config/token"

const useTokenSettings = () => {
  const { user } = useContext(StoreContext)
  const axiosSource = useRef()

  const newCancelToken = () => {
    axiosSource.current = axios.CancelToken.source()
    return axiosSource.current.token
  }

  useEffect(() => {
    user?.token && tokenAuth(user?.token)
  }, [user])

  useEffect(
    () => () => {
      if (axiosSource.current) axiosSource.current.cancel()
    },
    [],
  )

  return {
    newCancelToken,
    isCancel: axios.isCancel
  }
}

export default useTokenSettings