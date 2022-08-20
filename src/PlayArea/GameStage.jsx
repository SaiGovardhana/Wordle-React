import React from "react";
import GameRow from "./GameRow";

export default function GameStage()
{
    let arr=[1,2,3,4,5].map((x)=><GameRow key={x}></GameRow>)
    return <div className="game-stage"> {arr}</div>;

}