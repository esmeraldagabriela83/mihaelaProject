import React from "react";
import "./App.css";
import About from "./myPages/about";
import Shop from "./myPages/shop";
import Nav from "./myPages/Navbar";
import {Home} from "./myPages/home";

import {BrowserRouter , Route ,Routes } from "react-router-dom";
import Index from "./TutorialComponents/6-useReducer/setup";
import ContextAPI from "./TutorialComponents/8-useContext/setup/1-context-api";
import {NotFound} from "./myPages/not-found";







function AppGabi(){
    console.log("verificare consola");
    return(
             <div className="containerAppGabi">

             <BrowserRouter>
             <Nav/>
             <Routes>

                 <Route path={"/"}  element={<Home/>}/>
                 <Route path={"/about"} element={<About/>}/>
                 <Route path={"/shop"} element={<Shop/>}/>
                 <Route path={"*"} element={<NotFound/>}/>

             </Routes>


             <Index/>
             <ContextAPI/>

             </BrowserRouter>
             </div>
    )
}


export default AppGabi;



