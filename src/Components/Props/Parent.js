import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [num, setNum] = useState(0);

  const count = () => {
    console.log('Function as a Prop');
  };

  const handleIncrement = () => {
    setNum(num + 1);
    console.log(`Counter incremented to ${num + 1}`);
  };

  return (
    <>
      <h1>Parent</h1>
      <h1>{num}</h1>
      <Child name='Afnan' age={23} count={count} handleIncrement={handleIncrement} />
    </>
  );
}

export default Parent;
