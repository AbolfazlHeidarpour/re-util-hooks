import useTextFields from "../../hooks/useTextFields/useTextFields";
import {Input, TextField} from "@mui/material";
import React from 'react';

const Example = () => {
  const {
    getTextFieldProps,
    getInputProps,
  } = useTextFields({
    initialValues: {
      username: '',
      password: ''
    },
    initialHelperTexts: {
      username: 'Enter user name',
      password: 'Enter password',
    },
    options: {
      textFieldProps: {
        password: {
          type: 'password',
          variant: 'filled',
        }
      }
    }
  });

  return (
    <>
      <Input {...getInputProps && getInputProps('username')} />
      <TextField {...getTextFieldProps('password')} />
    </>
  );
};

export default Example;