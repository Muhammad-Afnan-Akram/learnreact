import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [parentData, setParentData] = useState('');

  const handleChildClick = (dataFromChild) => {
    console.log('Data received from child:', dataFromChild);
    // Handle data from child
    setParentData(dataFromChild);
  };

  return (
    <div>
      <p>Data in Parent: {parentData}</p>
      <ChildComponent onClick={handleChildClick} />
    </div>
  );
}

export default ParentComponent;