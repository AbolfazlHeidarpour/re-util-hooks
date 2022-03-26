import React from "react";

type TUseBoolean<T> = {
  state: boolean;
  toggle: () => void;
  reset: (condition?: boolean) => void;
  set: (condition?: boolean) =>  void;
  onChange: (event: React.ChangeEvent<T>) => void;
};

const useBoolean = <T>(initialValue: boolean = false): TUseBoolean<T> => {
  // gets initial boolean value defaults to false and creates state...
  const [state, setState] = React.useState<boolean>(initialValue);

  // toggles the boolean state...
  const toggle = React.useCallback(
    () => setState(!state),
    [setState, state]
  );

  const reset = React.useCallback(
    (condition?: boolean) =>
      setState(condition === undefined ? false : !condition),
    [setState]
  );

  const set = React.useCallback(
    (condition?: boolean) =>
      setState(condition === undefined ? true : condition),
    [setState]
  );

  const onChange = React.useCallback(
    (event: React.ChangeEvent<T>) => {
      if ('checked' in event.target)
        setState(event.target['checked']);
    },
    [setState]
  );

  return {
    onChange,
    state,
    toggle,
    reset,
    set
  };
};

export default useBoolean;