import axiosClient from "../config/axios";

const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}

export const getEntitiesByGroup = async (cancelToken) => {
  const url = "/entities_count";
  let result = await axiosClient.get(url, {
    headers,
    cancelToken
  });
  return result;
}