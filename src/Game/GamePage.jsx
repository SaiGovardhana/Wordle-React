import React, {useEffect, useState } from "react";
import WordleDisplayer from "../Heading/WordleDisplayer";
import Keyboard from "../Keyboard/Keyboard";
import GameStage from "../PlayArea/GameStage";
import GameHandler from "./GameHandler";
import InputHandler from "./InputHandler";


export default function GamePage()
{   let [state,setState]=useState([]);
    let gameHandler=new GameHandler(state,setState);
    useEffect(()=>{ 
        let inputHandler=(e)=>InputHandler(e,gameHandler);
        window.addEventListener('keyup',inputHandler);
        window.addEventListener('click',inputHandler);
        
       return  ()=>{window.removeEventListener('click',inputHandler);window.removeEventListener('keyup',inputHandler);};
    }
    );

    


    return (
            <div className="game-page">
                <WordleDisplayer></WordleDisplayer>
                <GameStage state={state}></GameStage>
                <Keyboard></Keyboard>
            </div>
          
        


    );

}