# React State App
## Making a counter using react state and event handling like click event

``` javascript
export default function Count(){
    let count=0;
    function handleClick(){
        count=count+1;
        console.log(count);
    }

    return(
        <>
            <h1>count={count}</h1>
            <button onClick={handleClick}>click me</button>
        </>
    );
}   
```

* In this code we are using a variable count which is initialized to 0 and a function handleClick which increments the count by 1 and logs it to the console.  
* But when we click the button the count is not incremented. This is because we are not using react state.  
* To use react state we need to use the useState hook.  
* The useState hook is a function that returns an array of two values: the current state and a function to update the state.  
* The first value is the current state and the second value is a function to update the state.  

``` javascript
import { useState } from "react";

let useState=useState(0);
console.log(useState);
```

* The Fix of this problem is to use the useState hook.

``` javascript
import { useState } from "react";

export default function Count(){
    let [count,setCount]=useState(0);
    function handleClick(){
        setCount(count+1);
    }

    return(
        <>
            <h1>count={count}</h1>
            <button onClick={handleClick}>click me</button>
        </>
    );
}   
```

### How does Re-Rendering work ??


```javascript
import { useState } from "react";

export default function Count(){
    let [count,setCount]=useState(0);
    console.log("outside the countFn",count);
    function handleClick(){
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
```

consider 2 phases in re-rendering

1.  when the setcount is called "setCount(count+1)"
2.  when the component is re-rendered

the count is not incremented when the button is clicked(The function is called ). It is incremented only when the component is re-rendered.

therefore the count inside function is one step behind the count outside function.

### Callback in updater function

```javascript
import { useState } from "react";

export default function Count(){
    let [count,setCount]=useState(0);
    function handleClick(){
        setCount((prevCount)=>prevCount+1);
    }

    return(
        <>
            <h1>count={count}</h1>
            <button onClick={handleClick}>click me</button>
        </>
    );
}   
```

We have to use callback in updater function when we are updating the state based on the previous state.

### More abour state

Re-render only occurs when the value of state is changed 
we can also pass function as a state
the function should be passed without parentheses, or being called while passing