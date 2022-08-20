import React from "react";
import WordleDisplayer from "./Heading/WordleDisplayer";
import GameStage from "./PlayArea/GameStage";

export default function Home()
{


    return (
            <div className="home">
                <WordleDisplayer></WordleDisplayer>
                <GameStage></GameStage>
            </div>
        


    );

}