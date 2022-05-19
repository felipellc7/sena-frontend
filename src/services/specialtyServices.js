import axiosClient from "../config/axios";

const headers = { "Accept": "application/json", "Content-Type": "application/json" };

export const getSpecialties = async ({params, cancelToken}) => {
  const url = "/specialties";
  let result = await axiosClient.get(url, {
    headers,
    params,
    cancelToken
  });
  return result;
}

export const getSpecialty = async ({id, cancelToken}) => {
  const url = `/specialties/${id}`;
  let result = await axiosClient.get(url, {
    headers,
    cancelToken
  });
  return result;
}

export const createSpecialty = async ({data, cancelToken}) => {
  const url = "/specialties";
  let result = await axiosClient.post(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const updateSpecialty = async ({data, cancelToken}) => {
  const url = `/specialties/${data.id}`;
  let result = await axiosClient.put(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const deleteSpecialty = async ({id, cancelToken}) => {
  const url = `/specialties/${id}`;
  let result = await axiosClient.delete(url, {
    headers,
    cancelToken
  });
  return result;
}