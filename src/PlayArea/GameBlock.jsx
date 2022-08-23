import React from "react";

export default function GameBlock({text,className})
{
    if(text === undefined)
        text=' ';


    return (    
                <div className={className}>
                    {text}

                </div>

    );

}