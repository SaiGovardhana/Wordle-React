import React from "react";

export default function GameBlock({text})
{
    if(text === undefined)
        text=' ';

    return (    
                <div className="game-block">
                    {text}

                </div>

    );

}