import axiosClient from "../config/axios";

const headers = { "Accept": "application/json", "Content-Type": "application/json" };

export const getConsultingRooms = async ({params, cancelToken}) => {
  const url = "/consulting_rooms";
  let result = await axiosClient.get(url, {
    headers,
    params,
    cancelToken
  });
  return result;
}

export const getConsultingRoom = async ({id, cancelToken}) => {
  const url = `/consulting_rooms/${id}`;
  let result = await axiosClient.get(url, {
    headers,
    cancelToken
  });
  return result;
}

export const createConsultingRoom = async ({data, cancelToken}) => {
  const url = "/consulting_rooms";
  let result = await axiosClient.post(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const updateConsultingRoom = async ({data, cancelToken}) => {
  const url = `/consulting_rooms/${data.consulting_room.id}`;
  let result = await axiosClient.put(url, data, {
    headers,
    cancelToken
  });
  return result;
}

export const deleteConsultingRoom = async ({id, cancelToken}) => {
  const url = `/consulting_rooms/${id}`;
  let result = await axiosClient.delete(url, {
    headers,
    cancelToken
  });
  return result;
}