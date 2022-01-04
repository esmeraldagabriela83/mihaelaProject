import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <>
            <nav>
                <h4 className="logoText">Project<br/><span style={{letterSpacing:"10px"}}>Logo</span></h4>
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