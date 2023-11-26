import React from 'react';
import ParentComponent from './Components/CallbacksForDS/ParentComponent';
import Parent from './Components/Props/Parent';
import MainPage from './Components/Main/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParentComponent1 } from './Components/UseContextforDS/ParentComponent1';
import UseEffectApi from './Components/UseEffect/UseEffectApi';
import UseEffectHook from './Components/UseEffect/UseEffecthook';
import ChildComponent1 from './Components/CallbacksForDS/ChildComponent';
import ChildComponent2 from './Components/UseContextforDS/ChildComponent2';
function App() {
  return (
 
<>
 {/* <Router>
       <Routes>
        <Route path="/MainPage" element={<MainPage />} />
       <Route path="/ParentComponent" element={<ParentComponent />} />
        <Route path="/Parent" element={<Parent />} />
      </Routes>
     </Router> */}

    <Parent />
    {/* Sharing data from Parent to Child using props*/}
      <ParentComponent />
      {/* Sharing data from Child to Parent using Callbacks*/}

      {/* Using ParentComponent to manage the context */}
      <ParentComponent1>
        <ChildComponent1 />
        <ChildComponent2 />
      </ParentComponent1>

      {/* Using UseEffect hook */}
      <UseEffectHook />
 {/* Using UseEffect hook with api*/}
      <UseEffectApi/>


      </>
    
  );
}

export default App;
