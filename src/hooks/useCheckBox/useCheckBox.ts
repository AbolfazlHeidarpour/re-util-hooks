import React from "react";
import useBoolean from "../useBoolean/useBoolean";
import UseCheckBox, { CheckBoxData } from "./types";

const useCheckBox: UseCheckBox = (params) => {
  const {state, onChange} = useBoolean<HTMLInputElement>(params.initialChecked);
  const [checkedStates, setCheckedStates] = React.useState<Record<string, boolean> | undefined>(params.initialCheckeds);

  const onCheckStatesChange = React.useCallback(
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (checkedStates)
        setCheckedStates({...checkedStates, [key]: event.target.checked})
    },
    [checkedStates, setCheckedStates]
  );

  const getCheckBoxData = React.useCallback(
    (): CheckBoxData => ({
      name: params.initialName,
      checked: state,
      onChange: onChange
    }), 
    [
      state, 
      onChange, 
      params.initialName
    ]
  );

  const getCheckBoxesDataByKey = React.useCallback(
    (key: string): CheckBoxData | undefined => {
      if (checkedStates)
        return ({
          name: key,
          checked: checkedStates[key],
          onChange: onCheckStatesChange(key)
        });
    }
    , 
    [checkedStates, onCheckStatesChange]
  );

  const getAllCheckBoxesData = React.useCallback((): CheckBoxData[] | undefined => {
    if (checkedStates)
      return Object.keys(checkedStates).map((key) => ({
        name: key,
        checked: checkedStates[key].valueOf(),
        onChange: onCheckStatesChange(key)
      }));
  }, 
    [checkedStates, onCheckStatesChange]
  );

  return {
    singleCheckBoxData: getCheckBoxData(),
    checkBoxesData: getAllCheckBoxesData(),
  };
};

export default useCheckBox;