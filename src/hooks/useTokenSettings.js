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
    // user?.access_token && tokenAuth(user?.access_token)
    tokenAuth("eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiQWxiZXJ0byIsImxhc3RfbmFtZSI6IlBlcmV6IiwiZnVsbF9uYW1lIjoiQWxiZXJ0byBQZXJleiIsImRuaSI6IjExNDMyMjIzMzMiLCJlbWFpbCI6ImFwZXJlekBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI0MjEwOTJ9.KP7gwRp_S84B9j5BipoIBSLDgav6XdIeJ_CUzLLr9lc")
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