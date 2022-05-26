import * as yup from "yup";

export const validationSchema = yup.object({
  id: yup.string(),
  name: yup.string().required("Required"),
});

export const defaultValues = {
  name: ""
};

export const fillForm = (reset, specialty) => {
  reset(specialty)
}