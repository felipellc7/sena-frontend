import * as yup from "yup";

export const validationSchema = yup.object({
  role: yup.string().required("Required"),
  dni: yup.string().required("Required"),
  password: yup.string().required("Required")
});

export const defaultValues = {
  role: "admin",
  dni: "",
  password: ""
}