import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export const useForm = (key, initialValues, cb) => {
  // inputs, -- handleChange, state(dynamicall manage any number of inpts)
  const [values, setValues] = useLocalStorage(key, initialValues);
  const handleChanges = e => {
    console.log(e.target.name);
    setValues({
      ...values,
      // unnamed object
      [e.target.name]: e.target.value
      // =>  username: e.target.value
      // =>  email: e.target.value
    });
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();
    // console.log("it worked");
    cb(values);
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, handleSubmit, clearForm];

  // form/buttons -- submit, clear
};
