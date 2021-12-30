import { InputProps, TextFieldProps } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  TUseTextFieldProps,
  TTextFieldValues,
  TUseTextField
} from "./types";

const useTextFields = ({
  initialValues,
  initialHelperTexts,
  handleHelperTexts,
  options,
}: TUseTextFieldProps): TUseTextField => {
  // gets object of initial values and creates values state...
  const [values, setValues] = useState<TTextFieldValues>(
    initialValues
  );
  // gets object of initial helper texts and creates helperTexts state...
  const [helperTexts, setHelperTexts] = useState<TTextFieldValues>(
    initialHelperTexts
  );

  const onValuesChange = useCallback(
    (key: string) => (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) =>
      setValues({ ...values, [key]: event.target.value }),
    [options?.textFieldProps, setValues, values]
  );

  useEffect(
    () => {
      if (handleHelperTexts)
        setHelperTexts(handleHelperTexts(values, helperTexts))
    },
    [values]
  );

  const getTextFieldProps = (key: string): TextFieldProps => {
    if (options && (options['textFieldProps'] && options['textFieldProps'][key]))
      return {
        ...options['textFieldProps'][key],
        onChange: onValuesChange(key),
        helperText: helperTexts[key],
        value: values[key]
      };
    else
      return {
        type: "text",
        size: "medium",
        value: values[key],
        helperText: helperTexts[key],
        variant: "outlined",
        onChange: onValuesChange(key)
      };
  };

  const getInputProps = (key: string): InputProps => {
    if (options && (options['inputProps'] && options['inputProps'][key]))
      return {
        ...options['inputProps'][key],
        onChange: onValuesChange(key),
        value: values[key]
      };
    else
      return {
        size: 'medium',
        type: 'text',
        onChange: onValuesChange(key)
      };
  };

  return {
    values,
    helperTexts,
    onValuesChange,
    getInputProps,
    getTextFieldProps
  };
};

export default useTextFields;
