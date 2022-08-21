import React from "react";
import GameRow from "./GameRow";

export default function GameStage({state})
{   let rows=[]
    for(let i=0,j=0;i<6;i++)
    {
        let temp=[]
        for(let k=0;k<5;k++,j++)
            temp.push(state[j])
        rows.push(temp)

    }
    let arr=[1,2,3,4,5,6].map((x,i)=><GameRow letters={rows[i]} key={x}></GameRow>)
    return <div className="game-stage"> {arr}</div>;

}