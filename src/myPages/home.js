import React from 'react';
import "../App.css";
import {HomeGrid} from "../homeComponents/gridHome/homeGrid";



export function Home() {

    return (
        <div>
            <h1 style={{letterSpacing:"0.3em" , padding:"0.7em" ,
                    textAlign:"center" , textShadow:"2px 2px 5px gray" ,
                    marginTop:"1.5em" , marginBottom:"1.5em"}}
                className="componentTagAbout myTitle">Item gallery</h1>

            <div className="mobileBlockScreenFlex">
                <div className="parent ">
                    <div className="child "></div>
                </div>

                <div className="parentCenter ">
                    <div className="childCenter "></div>
                </div>

                <div className="parent ">
                    <div className="child "></div>
                </div>
            </div>

            <HomeGrid/>
        </div>
    )
}


