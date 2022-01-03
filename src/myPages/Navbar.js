import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <>
            <nav>
                <h3 className="logoText">Project<span>Logo</span></h3>
                <ul className="nav-links">
                    <Link to="/home"><li className="liNavbar">Home</li></Link>
                    <Link to="/about"><li className="liNavbar">About</li></Link>
                    <Link to="/shop"><li className="liNavbar">Shop</li></Link>
                </ul>
            </nav>
        </>
    );
}

export default Nav;