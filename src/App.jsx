import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import GamePage from "./Game/GamePage";
import Index from "./Index/Index";

export default function App()
{  
    
    return (

        <BrowserRouter>
            <Routes>
             <Route path="/play" element={<GamePage></GamePage>}></Route>
            <Route path='/' element={<Index></Index>}></Route>
             </Routes>
        </BrowserRouter>

    );

}