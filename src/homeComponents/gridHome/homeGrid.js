import React from 'react';
import "./gridHome.scss"
import {PhotoHomeSources} from "./photoHomeSources";


const urlPhoto1 = "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" ;
const urlPhoto2 = "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
const urlPhoto3 = "https://images.unsplash.com/photo-1638842009112-a149ea35ada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const urlPhoto4 = "https://images.unsplash.com/photo-1619118374026-8fb20195f340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ;
const urlPhoto5 = "https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const urlPhoto6 = "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ;
const urlPhoto7 = "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80" ;
const urlPhoto8 = "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" ;
const urlPhoto9 = "https://images.unsplash.com/photo-1513716875652-59c99449ee70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80" ;
const urlPhoto11 = "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ;
const urlPhoto12 = "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ;
const urlPhoto13 = "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" ;



export function HomeGrid() {
    return (
        <>
            <div className="container componentTagAbout"
            style={{marginTop:"2.7em" , marginBottom:"1.5em"}}>

                <div className="row">
                    <div className="col-6 homeFooter">
                        <img src={urlPhoto11} alt="photo11" className="imgItemAbout"/>
                    </div>

                    <div className="col-6 homeFooter">
                        <img src={urlPhoto1} alt="photo1" className="imgItemAbout"/>
                    </div>
                </div>

                <div className="row mainContent">

                    <div className="col-4 sidebar">

                        <div className="row">

                            <div className="col-12 blue">
                                <img src={urlPhoto12} alt="photo12" className="imgItemAbout"/>
                            </div>

                            <div className="col-12 blue">
                                <img src={urlPhoto2} alt="photo2" className="imgItemAbout"/>
                            </div>
                            <div className="col-12 blue">
                               <img src={urlPhoto3} alt="photo3" className="imgItemAbout"/>
                            </div>
                        </div>

                    </div>
                    <div className="col-4 yellowColor">
                        <div className="row">
                            <div className="col-12 blue">
                                <img src={urlPhoto4} alt="photo4" className="imgItemAbout"/>
                            </div>
                            <div className="col-12 blue">
                                <img src={urlPhoto5} alt="photo5" className="imgItemAbout"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 sidebar">
                        <div className="row">
                            <div className="col-12 blue">
                                <img src={urlPhoto6} alt="photo6" className="imgItemAbout"/>
                            </div>

                            <div className="col-12 blue">
                                <img src={urlPhoto13} alt="photo13" className="imgItemAbout"/>
                            </div>

                            <div className="col-12 blue">
                                <img src={urlPhoto7} alt="photo7" className="imgItemAbout"/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-6 homeFooter">
                        <img src={urlPhoto8} alt="photo8" className="imgItemAbout"/>
                    </div>

                    <div className="col-6 homeFooter">
                        <img src={urlPhoto9} alt="photo9" className="imgItemAbout"/>
                    </div>

                </div>

            </div>

            <PhotoHomeSources/>

        </>
    )
}
