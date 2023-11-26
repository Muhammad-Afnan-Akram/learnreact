// ChildComponent.js
import React, { useContext } from 'react';
import { MyContext } from './ParentComponent1';

function ChildComponent1() {
  // Consuming the context using useContext hook
  const { data, setData, count, setCount } = useContext(MyContext);

  return (
    <div>
      <h3>Child1 Component</h3>
      <p>Data: {data}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ChildComponent1;
