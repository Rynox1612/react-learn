import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked]=useState(false)
    function handleClick(){
        setIsLiked(!isLiked);
        console.log(isLiked);
    }
    return(
        <>
            {isLiked ? <img onClick={handleClick} width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/like--v1.png" alt="like--v1"/> : <img onClick={handleClick} width="50" height="50" src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/>}
        </>
    );
}