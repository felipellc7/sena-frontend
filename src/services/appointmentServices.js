import axiosClient from "../config/axios";

const headers = { "Accept": "application/json", "Content-Type": "application/json" };

export const getAppointments = async ({params, cancelToken}) => {
  const url = "/appointments";
  let result = await axiosClient.get(url, {
    headers,
    params,
    cancelToken
  });
  return result;
}

export const getAppointment = async ({id, cancelToken}) => {
  const url = `/appointments/${id}`;
  let result = await axiosClient.get(url, {
    headers,
    cancelToken
  });
  return result;
}

export const createAppointment = async ({data, cancelToken}) => {
  const url = "/appointments";
  let result = await axiosClient.post(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const updateAppointment = async ({data, cancelToken}) => {
  const url = `/appointments/${data.appointment.id}`;
  let result = await axiosClient.put(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const deleteAppointment = async ({id, cancelToken}) => {
  const url = `/appointments/${id}`;
  let result = await axiosClient.delete(url, {
    headers,
    cancelToken
  });
  return result;
}