import React from "react";
import "./App.css";
import About from "./AboutPage";
import Shop from "./Shop";
import Nav from "./Navbar";

import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Index from "./TutorialComponents/6-useReducer/setup";
import ContextAPI from "./TutorialComponents/8-useContext/setup/1-context-api";






function AppGabi(){
    console.log("verificare consola");
    return(
        <Router>
            <div className="containerAppGabi">

            <Nav/>
            <About/>
            <Shop/>

           {/*<Route path="/about" component={About}/>*/}

           {/*<Route path="/shop" component={Shop}/>*/}

             <Index/>
             <ContextAPI/>

            </div>
        </Router>
    )
}


export default AppGabi;



