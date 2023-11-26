// ParentComponent.js
import React, { createContext, useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
// Creating a context
const MyContext = createContext();

function ParentComponent1({ children }) {
  const [data, setData] = useState("Hello from Context!");
  const [count, setCount] = useState(0);

  // You can include any other values you want to share in this object
  const contextValues = {
    data,
    setData,
    count,
    setCount,
  };

  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
}

export { ParentComponent1, MyContext };
