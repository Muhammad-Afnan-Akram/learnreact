import React from 'react';

function Child({ name, age, count, handleIncrement }) {
  return (
    <>
      <h1>Child</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={count}>Invoke count function</button>
      <button onClick={handleIncrement}>Increment Counter</button>
    </>
  );
}

export default Child;
