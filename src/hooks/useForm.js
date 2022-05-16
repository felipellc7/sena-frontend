import { useCallback } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

const useYupValidationResolver = validationSchema => useCallback(async data => {
  try {
    const values = await validationSchema.validate(data, {
      abortEarly: false
    });

    return {
      values,
      errors: {}
    };
  } catch (errors) {
    return {
      values: {},
      errors: errors.inner.reduce(
        (allErrors, currentError) => ({
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? "validation",
            message: currentError.message
          }
        }),
        {}
      )
    };
  }
}, [validationSchema]);

const useFormApp = (validationSchema, options = {}) => {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    getValues,
    control,
    watch,
    formState,
    formState: { errors } 
  } = useForm({ resolver, ...options });

  return {
    handleSubmit,
    register,
    reset,
    setValue,
    getValues,
    control,
    watch,
    formState,
    errors,
    Controller,
    useFieldArray
  }
}

export default useFormApp