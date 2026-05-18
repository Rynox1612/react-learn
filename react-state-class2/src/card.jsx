import './card.css';
import { useState } from 'react';

export default function Card({color}){
    let [move, setMove]=useState(0);
    function handleClick(){
        setMove(move+1);
    }
    return(
        <>
        <p>{color} move = {move}:</p>
        <div className="card" style={{backgroundColor:color}}>
            <button style={{backgroundColor:color}} onClick={handleClick}>+1</button>
        </div>
        </>
    );
}