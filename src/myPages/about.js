import React from "react";
import "../App.css";
import Index from "../TutorialComponents/6-useReducer/setup";
import ContextAPI from "../TutorialComponents/8-useContext/setup/1-context-api";

function About(){
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h2 className="createDeleteItemAbout"
                style={{marginTop:"1.5em" , marginBottom:"1em"}}>Create and delete item</h2>
           <div className="componentTagAbout">
               <Index/>
           </div>

            <div className="componentTagAbout">
                <ContextAPI/>
            </div>
        </div>
        </>
    );
}

export default About;















