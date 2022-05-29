import axiosClient from "../config/axios";

const headers = { "Accept": "application/json", "Content-Type": "application/json" };

export const getSchedules = async ({params, cancelToken}) => {
  const url = "/schedules";
  let result = await axiosClient.get(url, {
    headers,
    params,
    cancelToken
  });
  return result;
}

export const getSchedule = async ({id, cancelToken}) => {
  const url = `/schedules/${id}`;
  let result = await axiosClient.get(url, {
    headers,
    cancelToken
  });
  return result;
}

export const createSchedule = async ({data, cancelToken}) => {
  const url = "/schedules";
  let result = await axiosClient.post(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const updateSchedule = async ({data, cancelToken}) => {
  const url = `/schedules/${data.schedule.id}`;
  let result = await axiosClient.put(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const deleteSchedule = async ({id, cancelToken}) => {
  const url = `/schedules/${id}`;
  let result = await axiosClient.delete(url, {
    headers,
    cancelToken
  });
  return result;
}