import React from "react";

type TUseString<T> = {
  state: string;
  onChange: (event: React.ChangeEvent<T>) => void;
  update: (newValue: string) => void;
  add: (newValue: string) => void;
  reset: () => void;
}

const useString = <T extends Element>(initialValue: string = ''): TUseString<T> => {
  const [state, setState] = React.useState<string>(initialValue);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<T>) => {
      if ('value' in event.target)
        setState(event.target['value']);
    },
    []
  );

  const update = React.useCallback(
    (newValue: string) => setState(newValue),
    []
  );

  const add = React.useCallback(
    (newValue: string) =>
    setState((prevState => prevState.concat(newValue))),
    []
  );

  const reset = React.useCallback(
    () => setState(initialValue),
    []
  );

  return {
    state,
    onChange,
    update,
    add,
    reset
  };
};

export default useString;