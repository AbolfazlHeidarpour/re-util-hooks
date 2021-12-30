import { InputProps, TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

export type TTextFieldValues = Record<string, string | number>;

export type TTextFieldsProps = Record<string, TextFieldProps>;

export type TInputsProps = Record<string, InputProps>;

export type TUseTextFieldsOptions = {
  inputProps?: TInputsProps;
  textFieldProps?: TTextFieldsProps;
}

export type TUseTextField = {
  values?: TTextFieldValues;
  onValuesChange?: (
    key: string
  ) => (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  helperTexts?: TTextFieldValues;
  getTextFieldProps: (key: string) => TextFieldProps;
  getInputProps?: (key: string) => InputProps;
};

export type TUseTextFieldProps = {
  initialValues: TTextFieldValues;
  initialHelperTexts: TTextFieldValues;
  handleHelperTexts?: (
    values: TTextFieldValues,
    helperText: TTextFieldValues
  ) => TTextFieldValues;
  options?: TUseTextFieldsOptions;
};