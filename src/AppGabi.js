import React from "react";
import "./App.css";
import About from "./myPages/about";
import Shop from "./myPages/shop";
import Nav from "./myPages/Navbar";
import {Home} from "./myPages/home";

import {BrowserRouter , Route ,Routes } from "react-router-dom";

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
                 <Route path={"/shop"} exact element={<Shop/>}/>
                 <Route path={"*"} element={<NotFound/>}/>

             </Routes>

             <footer style={{textAlign:"center" , marginTop:"1.5em"}}>
               <h5>  Sources : </h5>
               <h6>https://course-api.com/javascript-store-products</h6>
             </footer>


             </BrowserRouter>
             </div>
    )
}


export default AppGabi;



