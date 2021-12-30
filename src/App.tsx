import React from "react";
import Example1 from "./example/useTextField/Example";
import Example2 from "./example/useBoolean/Example";
import Example3 from './example/useNumber/Example';
import Example4 from './example/useString/Example';

export default function App() {

  return (
    <div className="App">
      <h1>Hello React Utility hooks</h1>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
    </div>
  );
}
