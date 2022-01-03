import React from "react";
import "../App.css";
import Index from "../TutorialComponents/6-useReducer/setup";
import ContextAPI from "../TutorialComponents/8-useContext/setup/1-context-api";

function About(){
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h1 style={{marginTop:"1.5em" , marginBottom:"1em"}}>Create and delite item</h1>
            <Index/>
            <ContextAPI/>
        </div>
        </>
    );
}

export default About;















