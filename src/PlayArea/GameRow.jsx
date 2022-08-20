import React from "react";
import GameBlock from "./GameBlock";

export default function GameRow({letters})
{
    if (letters == undefined)
        letters=[' ',' ',' ',' ',' ']
    return (<div className="game-row">
                {
                    letters.map((x,i)=><GameBlock text={x} key={i}></GameBlock>)
                }
        </div>


    );

}