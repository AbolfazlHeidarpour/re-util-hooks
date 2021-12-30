import {Typography} from "@mui/material";
import React from "react";
import useString from "../../hooks/useString/useString";

const Example = () => {
  const text = useString('Frank');

  return (
    <>
      <button onClick={() => text.update('This is new string')} >Update me!</button>
      <button onClick={() => text.reset()}>Reset me to initial value</button>
      Change me!
      <input type={'text'} value={text.state} onChange={text.onChange} />
      <Typography variant={'h4'}>{text.state}</Typography>
    </>
  );
};

export default Example;