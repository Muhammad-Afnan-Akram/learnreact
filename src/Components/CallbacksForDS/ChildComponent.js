// Child Component
import React from 'react';

function ChildComponent(props) {
  const handleClick = () => {
    const someData = 'Hello from Child!';
    // Call the callback function passed from the parent with someData
    props.onClick(someData);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ChildComponent;