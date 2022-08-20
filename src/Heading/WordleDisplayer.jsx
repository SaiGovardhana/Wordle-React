import React from "react";
import BottomText from "./BottomText";
import WordleLetter from "./WordleLetter";

export default function WordleDisplayer()
{
    let letters=['W','O','R','D','L','E']
    let colors=['rgb(0,255,4)','rgb(255,0,0)','rgb(255,159,26)','rgb(154,155,147)']
    return (
    <>
            <div className="wordle-display-container">
        
                {letters.map((x,i)=><WordleLetter key={i} text={x} bgColor={colors[i%colors.length]}></WordleLetter>)}    
            </div>
            <BottomText></BottomText>
    </>   
            )
}