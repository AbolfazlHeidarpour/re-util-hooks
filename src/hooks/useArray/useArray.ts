import React from "react";

type TUseArray<T> = {
  state: T[];
  updateAllByNewValues: (newValues: T[]) => void;
  addValueWithDuplicates: (newValue: T) => void;
  addValuesWithDuplicates: (newValues: T[]) => void;
  updateByIndex: (newValue: T, index: number) => void;
  updateByPreviousValue: (newValue: T, prevValue: T) => void;
  updateBy: (newValue: T, callback: (newValue: T) => (value: T, index?: number, array?: T[]) => unknown) => void;
  addUniqueValue: (newValue: T) => void;
  addUniqueValues: (newValues: T[]) => void;
  updateAllByCallback: (callback: (value: T, index: number, array: T[]) => T) => void;
  filter: (callback: (value: T, index: number, array: T[]) => boolean) => void;
  sort: (callback?: (((a: T, b: T) => number))) => void;
  fill: (fillValue: T, startIndex?: number, endIndex?: number) => void;
  splice: (start: number, deleteCount?: number) => void;
}

const useArray = <T>(initialState: T[] = []): TUseArray<T> => {
  const [state, setState] = React.useState<Array<T>>(initialState);

  const updateAllByNewValues = React.useCallback(
    (newValues: T[]) => setState(newValues)
    ,
    []
  );

  const updateByIndex = React.useCallback(
    (newValue: T, index: number) =>
      setState(prevState => {
        prevState[index] = newValue;

        return prevState;
      })
    ,
    []
  );

  const updateByPreviousValue = React.useCallback(
    (newValue: T, prevValue: T) =>
      setState(prevState => {
        const foundIndex: number = prevState.findIndex(item => item === prevValue);

        if (foundIndex >= 0)
          prevState[foundIndex] = newValue;

        return prevState;
      })
    ,
    []
  );

  const updateBy = React.useCallback(
    (newValue: T, callback: (newValue: T) => (value: T, index?: number, array?: T[]) => unknown) =>
      setState(prevState => {
        const foundIndex: number = prevState.findIndex(callback(newValue));

        if (foundIndex >= 0)
          prevState[foundIndex] = newValue;

        return prevState;
      })
    ,
    []
  );

  const addValueWithDuplicates = React.useCallback(
    (newValue: T) => setState(prevState => prevState.concat(newValue))
    ,
    []
  );

  const addValuesWithDuplicates = React.useCallback(
    (newValues: T[]) => setState(prevState => prevState.concat(...newValues))
    ,
    []
  );

  const addUniqueValue = React.useCallback(
    (newValue: T) =>
      setState(prevState =>
        !prevState.find(item => item === newValue)
          ?
          prevState.concat(newValue)
          :
          prevState
      )
    ,
    []
  );

  const addUniqueValues = React.useCallback(
    (newValues: T[]) =>
      setState(prevState => {
        const uniqueValues = newValues.filter(newValue => !prevState.find(item => item === newValue));

        return prevState.concat(...uniqueValues);
      })
    ,
    []
  );

  const updateAllByCallback = React.useCallback(
    (callback: (value: T, index: number, array: T[]) => T) =>
      setState(prevState => prevState.map(callback))
    ,
    []
  );

  const filter = React.useCallback(
    (callback: (value: T, index: number, array: T[]) => boolean) =>
      setState(prevState => prevState.filter(callback))
    ,
    []
  );

  const sort = React.useCallback(
    (callback: ((a: T, b: T) => number) | undefined) =>
      setState(prevState => prevState.sort(callback))
    ,
    []
  );

  const fill = React.useCallback(
    (fillValue: T, startIndex?: number, endIndex?: number) =>
      setState(prevState => prevState.fill(fillValue, startIndex, endIndex))
    ,
    []
  );

  const splice = React.useCallback(
    (start: number, deleteCount?: number) =>
      setState(prevState => prevState.splice(start, deleteCount))
    ,
    []
  );

  return {
    state,
    updateAllByNewValues,
    addValueWithDuplicates,
    addValuesWithDuplicates,
    updateByIndex,
    updateByPreviousValue,
    updateBy,
    addUniqueValue,
    addUniqueValues,
    updateAllByCallback,
    filter,
    sort,
    fill,
    splice
  };
};

export default useArray;