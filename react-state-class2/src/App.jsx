import './App.css'
import CardTab from './card-tab'
import { useState } from 'react'



function App() {
  let [count,setCount]=useState(false);
  return (
    <>
    <button onClick={()=>setCount(!count)}>{count?"Hide" : "Show"}</button>
    {count && <CardTab/>}
    </>
  );
}

export default App
