import React from "react";

export default function WordleLetter({text,bgColor})
{
    return (<div className="wordle-displayer-letter" style={{backgroundColor:bgColor}}>
        <span className="">{text}</span>      
        </div>  

    );
}