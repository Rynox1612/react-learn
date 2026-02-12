# Basic React Lessons

> ⚙️Note: The react component should start with a capital initial

## 1. How to setup a React app?

Move into the intended directory and run this command:
```bash
npm create vite@latest
```

Then select React as your framework.

## 2. How to run the dev server?
```bash
npm run dev
```

## 3. How to create a component?
```javascript
function BasicComponent() {
    return (
        <h1>I am a header</h1>
    );
}
```

### How to export and import it?
```javascript
// Export (at the bottom of the component file)
export default BasicComponent;

// Import (in another file)
import BasicComponent from './<filename>';
```

## 4. JSX with curly braces

*To add dynamic ability or write pure java script*

``` javascript

function Table(){
    let name= "Rupesh"

    return(
        <div>
        <p>2 * 2 = {2*2}</p>
        <p>Hi {name.toUppercase()}.</p>
        </div>
    );
}

```

## 5. Structuring Components

You can use empty tags to Create a single cmponent to return 

``` javascript

function Text(){
    <>
    <p>This is my react text.</p>
    <p>This is my react text.</p>
    <p>This is my react text.</p>
    </>
}
```

## 6. Styling in React

a. Put every styling in one single css file (not recommended).
b. Every component has its own CSS. (Frequently used)

### About webpack
This pack enables import and export functionalities.
 
#### How import is different than require?
 When we import something, we dont really have to use( example: CSS files)
 But when we require something it is basically a function or an object so we have to use it somewhere.

# React Props and further

## 1. React props

Props are the information which can be passed as attributes of the tag of the component while rendering.

```javascript
<Product title="Phone" price="30k">
```


### Props with numbers
```javascript
<Product title="Phone" price={30000}/>
```

*Note: Props with numbers are passed without quotes and in curly braces.*
*Mathematical operations can be performed inside the curly braces, or with these numbers*

### Setting default props
```javascript
function Product({title="Phone",price=30000}){
    return(
        <div className="Product">
            <h5>
                {title}.
            </h5>
            <p>{price+0.18*price}</p>
        </div>
    )
}
```

The default props are set in the function itself.

### Passing arrays in props

arrays are passed as props like this:
```javascript
<Product title="Phone" price={30000} features={["16GB RAM","128GB Storage","12MP Camera","hi-tech"]}/>

// similarly objects are also passed as props like this:

<Product title="Phone" price={30000} features={{"16GB RAM","128GB Storage","12MP Camera","hi-tech"}}/>
```


### In order te render arrays in props, we use the map function to list items in the array

```javascript
features={[<li>16GB RAM</li>,<li>128GB Storage</li>,<li>12MP Camera</li>,<li>hi-tech</li>]} />

//OR

function Product({title,price,features}){
    const list = features.map((feature, index) => (
        <li key={index}>{feature}</li>
));

    return(
        <div className="Product">
            <h5>
                {title}.
            </h5>
            <p>{price+0.18*price}</p>
            <ul>{list}</ul>
        </div>
    )
}

// BOTH WILL GIVE THE SAME OUTPUT
```
## 2. Conditionals

```javascript
{price>=30000 ? <p>Available</p> : <p>Not Available</p>}

```
### There are multiple ways to write conditionals

#### a. if-else

```javascript
if(condition){
    return(<p>Available</p>)
}
else{
    return(<p>Not Available</p>)

}
// This can lead to the repetition of the code.
```


#### b. Ternary operator

```javascript
let isTrue=condition ? "Discount available" : "";

<p>{isTrue}</p>


// This creates an extra paragraph tag 
```


#### c. Logical AND operator

> **Note**: These are used more frequently
```javascript

{condition ? <p>Available</p> : null}

// OR

{condition && <p>Available</p>}

```
### You can also do dynamic styling using inline styling and conditional rendering

```javascript
function Product({title,price,features}){
    return(
        <div style={{backgroundColor: price>=30000 ? "green" : "red", color: "white"}}>
            <h5>
                {title}.
            </h5>
            <p>{price+0.18*price}</p>
        </div>
    )
}
```
## 3. Event Handling

### There are three types of event handling

#### a. Inline event handling
```javascript
<button onClick={handleClick}>Click me</button>
```

#### b. Event handling using function
```javascript
function handleClick(){
    console.log("Button clicked");
}
```

#### c. Event handling using arrow function
```javascript
const handleClick = () => {
    console.log("Button clicked");
}
``` 

## 4. State
 
### What is state?
State is a data that can be changed over time. It is a way to store data that can be changed over time. 

### How to use state?
It is explained in 
[react-state-app](../react-state-app/README.md);

### What is closure ??

```javascript
function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction;
}

const myFunc = outerFunction();
myFunc(); // Output: 10
```

From above example we can see that the innerFunction has access to the outerVariable even after the outerFunction has returned. This is called closure.

### Why is closure used in react state?

In react state, we use closure to maintain the state of the component. When we use the useState hook, it returns a function that can be used to update the state. This function has access to the state of the component through closure.

### How does Re-Rendering work ??
