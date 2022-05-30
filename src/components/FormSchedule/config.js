import * as yup from "yup";
import {displayTime} from '../../helpers/dateTimeHelper'

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