import axiosClient from "../config/axios";

const headers = { "Accept": "application/json", "Content-Type": "application/json" };

export const getPatients = async ({ params, cancelToken }) => {
  const url = "/patients";
  let result = await axiosClient.get(url, {
    headers,
    params,
    cancelToken
  });
  return result;
}

export const getPatient = async ({ dni, cancelToken }) => {
  const url = `/patients/${dni}`;
  let result = await axiosClient.get(url, {
    headers,
    cancelToken
  });
  return result;
}

export const createPatient = async ({ data, cancelToken }) => {
  const url = "/patients";
  let result = await axiosClient.post(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const updatePatient = async ({ data, cancelToken }) => {
  const url = `/patients/${data.dni}`;
  let result = await axiosClient.put(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const deletePatient = async ({ dni, cancelToken }) => {
  const url = `/patients/${dni}`;
  let result = await axiosClient.delete(url, {
    headers,
    cancelToken
  });
  return result;
}
