import React, {useState} from "react";
import "../App.css";
import Index from "../TutorialComponents/6-useReducer/setup";
import ContextAPI from "../TutorialComponents/8-useContext/setup/1-context-api";
import Slider from "../itemsSlider/Slider";
import {PhotoAboutListSources} from "../TutorialComponents/8-useContext/setup/photoAboutListSources";
import {PhotoAboutSliderSources} from "../itemsSlider/photoAboutSliderSources";



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

            <div className="componentTagAbout">
                <Slider/>
            </div>

            <PhotoAboutListSources/>

            <PhotoAboutSliderSources/>

        </div>
        </>
    );
}

export default About;















