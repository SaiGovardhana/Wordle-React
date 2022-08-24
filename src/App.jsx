import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import GamePage from "./Game/GamePage";

export default function App()
{  
    
    return (

        <BrowserRouter>
            <Routes>
             <Route path="/play" element={<GamePage></GamePage>}></Route>
        
             </Routes>
        </BrowserRouter>

    );

}