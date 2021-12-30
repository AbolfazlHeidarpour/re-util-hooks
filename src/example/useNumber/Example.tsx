import {Typography} from "@mui/material";
import React from "react";
import useNumber from "../../hooks/useNumber/useNumber";

const Example = () => {
  const counter = useNumber();

  return (
    <>
      <button onClick={() => counter.increaseBy(2)} >Increase me by 2!</button>
      <button onClick={() => counter.decreaseBy(1)} >Decrease me by 1!</button>
      <button onClick={() => counter.update(10)}>Update me to 10</button>
      <button onClick={() => counter.update(20)}>Update me to 20</button>
      <button onClick={() => counter.reset()}>Reset me to initial value</button>
      Change me!
      <input type={'number'} value={counter.state} onChange={counter.onChange} />
      <Typography variant={'h4'}>{counter.state}</Typography>
    </>
  );
};

export default Example;