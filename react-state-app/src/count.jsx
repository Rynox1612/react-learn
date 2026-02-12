import { useState } from "react";
export default function Count(){
    let [count,setCount]=useState(0);
    console.log("outside the countFn",count);
    function handleClick(){
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        
        console.log("inside the countFn",count);
    }

    return(
        <>
            <h1>count={count}</h1>
            <button onClick={handleClick}>click me</button>
        </>
    );
}