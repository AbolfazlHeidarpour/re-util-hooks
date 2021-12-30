import { useCallback, useState } from "react";

type TUseBoolean = {
  state: boolean;
  toggle: () => void;
  reset: (condition?: boolean) => void;
  set: (condition?: boolean) =>  void;
};

const useBoolean = (initialValue: boolean = false): TUseBoolean => {
  // gets initial boolean value defaults to false and creates state...
  const [state, setState] = useState<boolean>(initialValue);

  // toggles the boolean state...
  const toggle = useCallback(
    () => setState(!state),
    []
  );

  const reset = useCallback(
    (condition?: boolean) =>
      setState(condition === undefined ? false : !condition),
    []
  );

  const set = useCallback(
    (condition?: boolean) =>
      setState(condition === undefined ? true : condition),
    []
  );

  return {
    state,
    toggle,
    reset,
    set
  };
};

export default useBoolean;