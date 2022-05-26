import * as yup from "yup";

export const validationSchema = yup.object({
  id: yup.string(),
  name: yup.string().required("Required"),
  loc_country: yup.string().required("Required"),
  loc_city: yup.string().required("Required"),
  loc_region: yup.string().required("Required"),
  loc_commune: yup.string().required("Required"),
  loc_address: yup.string().required("Required"),
  loc_description: yup.string().max(100).required("Required"),
  specialty_id: yup.string().required("Required"),
});

export const defaultValues = {
  name: ""
};

export const fillForm = (reset, consulting_room) => {
  reset(consulting_room)
}