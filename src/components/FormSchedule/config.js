import * as yup from "yup";

export const validationSchema = yup.object({
  id: yup.string(),
  date: yup.date().required("Required"),
  time: yup.string().required("Required"),
  consulting_room_id: yup.string().required("Required"),
});

export const defaultValues = {
  date: new Date(),
  time: new Date(),
  consulting_room_id: "",
};

export const fillForm = (reset, schedule) => {
  reset({
    ...schedule,
    time: displayTime(schedule.time),
  })
}

const displayTime = scheduleTime => {
  try {
    const time = new Date(scheduleTime)
    const hour = time.getUTCHours()
    const minutes = time.getUTCMinutes()
    const hoursFormatted = hour < 10 ? `0${hour}` : hour
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes
    return `${hoursFormatted}:${minutesFormatted}`
  } catch (error) {
    return "N/D"
  }
}