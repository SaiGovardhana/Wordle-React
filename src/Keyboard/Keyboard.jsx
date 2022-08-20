import React from "react";
import KeyboardRow from "./KeyboardRow";

export default function Keyboard()
{
    let row1=['Q','W','E','R','T','Y','U','I','O','P'];
    let row2=['A','S','D','F','G','H','J','K','L'];
    let row3=['\u{232B}','Z','X','C','V','B','N','M','\u{23CE}']
    let arr=[];
    arr.push(row1,row2,row3)
    
    
    
    return <div className="keyboard">{arr.map((x,i)=><KeyboardRow key={i} alphabets={x}></KeyboardRow>)} </div>
}