import React from "react";

type TUseRecord<T extends number | string | symbol, P> = {
  state: Record<T, P>;
  getValueByKey: (key: T) => P;
  setValue: (key: T, value: P) => void;
  hasValue: (key: T) => boolean;
  deleteByValue: (value: P) => void;
  getKeysByValue: (value: P) => Array<string>;
  deleteEntryByKey: (key: T) => void;
  hasKey: (key: T) => boolean;
}

const useRecord = <T extends number | string | symbol, P>(initialValue: Record<T, P>): TUseRecord<T, P> => {
  // Gets initial state value and creates record state...
  const [state, setState] = React.useState<Record<T, P>>(initialValue);

  // Gets value of given key in current record state...
  const getValueByKey = React.useCallback(
    (key: T): P => state[key],
    [state]
  );

  // Sets a new entry in record state with given key and value...
  const setValue = React.useCallback(
    (key: T, value: P): void =>
      setState({...state, [key] : value}),
    []
  );

  // Determines if a value exists with given key in current record state...
  const hasValue = React.useCallback(
    (key: T): boolean =>
      Object.values(state).findIndex((value) => value === state[key]) >= 0,
    [state]
  );

  // Deletes all entries with given value
  const deleteByValue = React.useCallback(
    (value: P): void =>
      setState((prevState) =>
        Object.fromEntries(
          Object.entries(prevState).filter(
            ([key, currentValue]) => currentValue as P !== value
          )
    ) as Record<T, P>
  ),
    []
  );


  // Gets all keys that have value equal to given value...
  const getKeysByValue = React.useCallback(
    (value: P): Array<string> =>
      Object.keys(state).filter(key => state[key as T] === value)
  ,
    [state]
  );

  // Delete all entries that contain given key
  const deleteEntryByKey = React.useCallback(
    (key: T): void =>
      setState((prevState) =>
        Object.fromEntries(
          Object.entries(prevState).filter(([currentKey]) => currentKey as T !== key)
    ) as Record<T, P>
  ),
    []
  );

  // Determines of an entry with given key exists...
  const hasKey = React.useCallback(
    (key: T): boolean =>
      Object.keys(state).findIndex((oldKey) => oldKey === key) >= 0
  ,
    []
  );

  return {
    state,
    getValueByKey,
    setValue,
    hasValue,
    deleteByValue,
    getKeysByValue,
    deleteEntryByKey,
    hasKey,
  };
};

export default useRecord;