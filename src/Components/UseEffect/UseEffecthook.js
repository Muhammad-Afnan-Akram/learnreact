import React from "react";
import { useEffect,useState } from "react";

function useEffecthook(){

    const [count,setCount]=useState(0);
const IncrementCounter = () => {
    setCount(count+1);
};
const DecrementCounter=()=>{
    setCount(count-1);
};

useEffect(()=>{
    //The code that we want to run here. When the component mount it run atleast one time
    console.log("useEffect hook : ",count);

    //optional return function
    return()=>{
        console.log("cleanup code");
    }
},[count]//dependency array
)
    return(
<>
<h2>Count: {count}</h2>
<button onClick={IncrementCounter}>Increment</button>
<button onClick={DecrementCounter}>Decrement</button>
</>
    );
}

export default useEffecthook;