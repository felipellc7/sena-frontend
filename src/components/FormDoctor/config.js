import * as yup from "yup";

export const validationSchema = yup.object({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  dni: yup.number().required("Required"),
  gender: yup.string().required("Required"),
  phone: yup.number().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
  specialty_id: yup.string().required("Required"),
  active: yup.boolean().required("Required")
});

export const defaultValues = {
  first_name: "",
  last_name: "",
  dni: "",
  gender: "",
  specialty_id: "",
  phone: "",
  email: "",
  password: "",
  active: true
};

export const loadForm = (reset, doctor) => {
  reset(doctor)
}