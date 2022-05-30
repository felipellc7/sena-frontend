import * as yup from "yup";

export const validationSchema = yup.object({
  id: yup.string(),
  doctor_dni: yup.string().required("Required"),
  patient_dni: yup.string().required("Required"),
  schedule_code: yup.string().required("Required"),
  observations: yup.string().required("Required"),
});

export const defaultValues = {
  doctor_dni: "",
  patient_dni: "",
  schedule_code: "",
  observations: "",
};

export const fillForm = (reset, appointment) => {
  reset({
    id: appointment.id,
    doctor_dni: appointment.doctor.dni,
    patient_dni: appointment.patient.dni,
    schedule_code: appointment.schedule.code,
    observations: appointment.observations,
  })
}