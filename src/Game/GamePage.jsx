import React, {useEffect, useState } from "react";

import WordleDisplayer from "../Heading/WordleDisplayer";
import Keyboard from "../Keyboard/Keyboard";
import GameStage from "../PlayArea/GameStage";
import displayToast from "../Toast/DisplayToast";
import GameHandler from "./GameHandler";
import getWord from "./getWord";
import InputHandler from "./InputHandler";


export default function GamePage()
{   let [state,setState]=useState([]);
    let [curRow,setCurRow]=useState(0);
    let [word,setWord]=useState(getWord());
    let [isGameCompleted,setGameCompleted]=useState(false);
    let [isWordsPresent,setWordsPresent]=useState(localStorage.getItem('words')!=undefined);
    let isComponentMounted=true;
    
    //Code for handling retirieving words
    if(isWordsPresent==false)
    {  
        useEffect(
        ()=>
        {   displayToast('Downloading Words..Please Wait');
            fetch('/words.json',{method:'GET'}).then((res)=>
            {
                if(res.status!=200)
                    {
                        throw new Error('Couldnt fetch words');
                    }
                    console.log(res.status)
                    return res.json();
            }
            ).then(

                (body)=>{

                    localStorage.setItem('words',body);
                    if(isComponentMounted)
                    {
                        setWordsPresent(true);
                        setWord(getWord());
                    }
                    


                }
            ).catch(e=>{console.log('couldnt fetch , try refreshing the page')});
        return ()=>isComponentMounted=false;
        },[]

        );
        return (
            <div className="game-page">
                <WordleDisplayer></WordleDisplayer>
                <h2 style={{textAlign:'center'}} >Couldn't find Words...Downloading</h2>
                <Keyboard></Keyboard>
            </div>
          );
    }


    

    
    
    console.log(word)

    let gameHandler=new GameHandler(state,setState,curRow);
    useEffect(()=>{ 
        let inputHandler=(e)=>{
           if(!isComponentMounted||isGameCompleted)
            return ;
            let enter=InputHandler(e,gameHandler);
            if(enter==='Enter')
            {
                if(state.length==5*(curRow+1))
                {   if(localStorage.getItem('words').indexOf(state.slice(-5).join(''))==-1)
                    {   displayToast('Word Not In dictionary!!!');
                        console.log('Word Not In dictionary!!!');
                        return;
                    }
                    setCurRow(prev=>prev+1);
                    if(state.length==30||word==state.slice(-5).join(''))
                        {
                            console.log('Game Completed');
                            if(word==state.slice(-5).join(''))
                                displayToast(`Well Done!`,'green');
                            else
                                displayToast(`Oops! The word is ${word}`,'red');
                            setGameCompleted(true);
                            
                        }
                    

                }
            }
        };
        
        
        window.addEventListener('keyup',inputHandler);
        window.addEventListener('click',inputHandler);
        
       return  ()=>{isComponentMounted=false;window.removeEventListener('click',inputHandler);window.removeEventListener('keyup',inputHandler);};
    }
    );
    
    console.log(state)
    if(isGameCompleted)
    
       return ( <div className="game-page">
            <WordleDisplayer></WordleDisplayer>
            <GameStage word={word} curRow={curRow} state={state}></GameStage>
            {
                    (word==state.slice(-5).join(''))?<h1 style={{textAlign:'center'}} className="green">Game Won</h1>:<h1 style={{textAlign:'center'}} className="red">Game Lost</h1>
            }
            
            <button className={'game-end-button'} onClick={()=>{
                    setCurRow(0);
                    setWord(getWord());
                    setGameCompleted(false);
                    setState([])
            }
            }><h3>Play Again</h3></button>
            
        </div>);

    
    
    return (
            <div className="game-page">
                <WordleDisplayer></WordleDisplayer>
                <GameStage word={word} curRow={curRow} state={state}></GameStage>
                <Keyboard></Keyboard>
            </div>
          
        


    );

}