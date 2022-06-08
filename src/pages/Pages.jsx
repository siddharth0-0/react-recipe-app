import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:type" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe/>} />
        </Routes>
    )
}

export default Pages;