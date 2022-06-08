import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";

function Pages(){
    return(
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sam" element={<Cuisine/>}/>
        </Routes>
    )
}

export default Pages;