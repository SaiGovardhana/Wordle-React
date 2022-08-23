import React from "react";

export default function KeyboardRow({alphabets})
{
  
    return (
        <div className="keyboard-row">
            {alphabets.map((x,i)=>{return <button type="button" className="keyboard-button" key={i}>{x}</button>})}
        </div>
        );

}