import { useState } from "react";

export default function NoTouch(){
    let [isHovered,setIsHovered]=useState(false);
    function handleHover(){
        setIsHovered(true);
        console.log("Do not touch me!");
        setTimeout(() => {
            setIsHovered(false);
        }, 2000);
    }
    return(
        <>
            {isHovered ? <h1>I said,Do not touch me!</h1> : <h1 onMouseEnter={handleHover}>No Touch</h1>}
        </>
    );
}