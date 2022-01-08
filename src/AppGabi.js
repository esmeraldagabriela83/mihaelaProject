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

                 <div className="supervisors" style={{marginBottom:"1.5em"}}>
                     <div className="catalin">
                     <h5>Catalin Marin</h5>
                     </div>

                     <div className="supervisorsAnimation">
                         <h6><span>Supervisors</span></h6>
                     </div>

                     <div className="costica">
                     <h5 >Costica Puntaru</h5>
                     </div>

                 </div>

             </footer>


             </BrowserRouter>
             </div>
    )
}


export default AppGabi;



