import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

import logoShape from "../icons/logoShape.svg";

function Nav(){
    return(
        <>
            <nav>
                <div style={{display:"flex"}}>
                    <h4
                        style={{paddingTop:"0.7em"}}
                        className="logoText">Project<br/><span style={{letterSpacing:"7px"}}>ITEM</span></h4>
                    <img src={logoShape} alt="myLogo" style={{height:"3.7em" , width:"3.7em"}}/>
                </div>
                <ul className="nav-links">
                    <Link to="/"><li className="liNavbar">Home</li></Link>
                    <Link to="/about"><li className="liNavbar">About</li></Link>
                    <Link to="/shop"><li className="liNavbar">Shop</li></Link>
                </ul>
            </nav>
        </>
    );
}

export default Nav;