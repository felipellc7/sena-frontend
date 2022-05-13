import axiosClient from "../config/axios";

const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}

export const getDoctors = async ({params, cancelToken}) => {
  const url = "/doctors";
  let result = await axiosClient.get(url, {
    headers,
    params,
    cancelToken
  });
  return result;
}

export const getDoctor = async ({dni, cancelToken}) => {
  const url = `/doctors/${dni}`;
  let result = await axiosClient.get(url, {
    headers,
    cancelToken
  });
  return result;
}

export const createDoctor = async ({data, cancelToken}) => {
  const url = "/doctors";
  let result = await axiosClient.post(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const updateDoctor = async ({data, cancelToken}) => {
  const url = "/doctors/:doctorId";
  let result = await axiosClient.put(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const deleteDoctor = async ({data, cancelToken}) => {
  const url = "/doctors/:doctorId";
  let result = await axiosClient.delete(url, {
    headers,
    data,
    cancelToken
  });
  return result;
}