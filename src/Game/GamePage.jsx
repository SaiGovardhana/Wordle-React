import React, {useEffect, useState } from "react";
import WordleDisplayer from "../Heading/WordleDisplayer";
import Keyboard from "../Keyboard/Keyboard";
import GameStage from "../PlayArea/GameStage";
import GameHandler from "./GameHandler";
import InputHandler from "./InputHandler";


export default function GamePage()
{   let [state,setState]=useState([]);
    let [isPlayable,setPlayable]=useState(true);
    let [curRow,setCurRow]=useState(0);
    let word='HELLO'
    let gameHandler=new GameHandler(state,setState,curRow);
    useEffect(()=>{ 
        let inputHandler=(e)=>{
           
            let enter=InputHandler(e,gameHandler);
            if(enter==='Enter')
            {
                if(state.length==5*(curRow+1))
                    setCurRow(prev=>prev+1);
            }
        };
        
        
        window.addEventListener('keyup',inputHandler);
        window.addEventListener('click',inputHandler);
        
       return  ()=>{window.removeEventListener('click',inputHandler);window.removeEventListener('keyup',inputHandler);};
    }
    );

    


    return (
            <div className="game-page">
                <WordleDisplayer></WordleDisplayer>
                <GameStage word={word} curRow={curRow} state={state}></GameStage>
                <Keyboard></Keyboard>
            </div>
          
        


    );

}