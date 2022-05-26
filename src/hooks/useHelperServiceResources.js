import {useEffect, useState} from 'react'
import {
  getEntitiesByGroup
} from "../services/helperServices"
import useTokenSettings from './useTokenSettings'
import useGetRequestErrors from './useGetRequestErrors'

const useHelperServiceResources = ({
  loadEntitiesGroup = false,
}) => {
  const {inspectError} = useGetRequestErrors()
  const {newCancelToken} = useTokenSettings()
  const [load, setLoad] = useState(false)
  const [entities, setEntities] = useState(null)

  useEffect(() => {
    loadEntitiesGroup && onLoadEntitiesGroup()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadEntitiesGroup])

  const onLoadEntitiesGroup = async () => {
    try {
      setLoad(true)
      let {data} = await getEntitiesByGroup(newCancelToken())
      setEntities(data)
      setLoad(false)
    } catch (error) {
      inspectError(error)
      setLoad(false)
    }
  }

  return {
    loadHelper: load,
    entities
  }
}

export default useHelperServiceResources