import React from "react";
import GameBlock from "./GameBlock";

export default function GameRow({letters,word,isCompleted})
{
    if (letters == undefined)
        letters=[' ',' ',' ',' ',' ']
    let classNames=[]
    let used=[]
    for(let i=0;i<5;i++)
        used[i]=false;
    for(let i=0;i<5;i++)
        {
            classNames[i]='game-block';
            if(letters[i]==word[i])
            {
                classNames[i]='game-block game-block-correct';
                used[i]=true;
            }

        }

        for(let i=0;i<5;i++)
        {   if(classNames[i]=='game-block game-block-correct')
                continue;
            classNames[i]='game-block game-block-wrong';
            for(let j=0;j<5;j++)
                if(letters[i]==word[j]&&used[j]==false)
                    {
                        classNames[i]='game-block game-block-present';
                        used[j]=true;
                        break;
                    }
            
        }


    
    return (<div className="game-row">
                {
                    letters.map((x,i)=>{
                                if(isCompleted)
                                    return <GameBlock className={classNames[i]} text={x} key={i}></GameBlock>;
                                else
                                    return <GameBlock className={'game-block'} text={x} key={i}></GameBlock>;
                        }
                    )
                }
        </div>


    );

}