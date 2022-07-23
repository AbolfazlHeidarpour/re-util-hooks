import React from "react";

export type CheckBoxData = {
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type UseCheckBoxParams = {
  initialChecked?: boolean;
  initialName: string;
  initialCheckeds?: Record<string, boolean>;
}

export type UseCheckBoxReturnType = {
  singleCheckBoxData: CheckBoxData | undefined;
  checkBoxesData: CheckBoxData[] | undefined;
}

type UseCheckBox = (params: UseCheckBoxParams) => UseCheckBoxReturnType;

export default UseCheckBox;