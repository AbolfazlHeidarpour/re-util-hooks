import React from "react";

type TUseNumber<T> = {
  state: number;
  onChange: (event: React.ChangeEvent<T>) => void;
  update: (newValue: number) => void;
  increaseBy: (newValue?: number) => void;
  decreaseBy: (newValue?: number) => void;
  reset: (valueToReset?: number) => void
}

const useNumber = <T extends Element>(initialValue: number = 0): TUseNumber<T> => {
  const [state, setState] = React.useState<number>(initialValue);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<T>) => {
      if ('value' in event.target)
        setState(event.target['value'] as number);
    },
    []
  );

  const update = React.useCallback(
    (newValue: number) => setState(newValue),
    []
  );

  const increaseBy = React.useCallback(
    (newValue: number = 1) =>
      setState((prevState => prevState + newValue))
    ,
    []
  );

  const decreaseBy = React.useCallback(
    (newValue: number = 1) =>
      setState((prevState => prevState - newValue))
    ,
    []
  );

  const reset = React.useCallback(
    (valueToReset: number = initialValue) =>
      setState(valueToReset),
    []
  );

  return {
    state,
    onChange,
    update,
    increaseBy,
    decreaseBy,
    reset,
  };
};

export default useNumber;