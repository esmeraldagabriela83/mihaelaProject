import React from 'react';
import "./gridHome.scss"


const urlPhoto1 = "https://images.unsplash.com/photo-1633153010796-6cf54b5daebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" ;

const urlPhoto2 = "https://images.unsplash.com/photo-1527519124254-9dafd8b3533b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const urlPhoto3 = "https://images.unsplash.com/photo-1638842009112-a149ea35ada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const urlPhoto4 = "https://images.unsplash.com/photo-1619118374026-8fb20195f340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ;
const urlPhoto5 = "https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const urlPhoto6 = "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ;
const urlPhoto7 = "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80" ;
const urlPhoto8 = "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" ;


const urlPhoto9 = "https://images.unsplash.com/photo-1513716875652-59c99449ee70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80" ;


export function HomeUl() {

    return (
        <>

            <div className="container componentTagAbout"
            style={{marginTop:"1.5em" , marginBottom:"1.5em"}}>

                <div className="row header">
                    <div className="col-12 movColor">
                        <img src={urlPhoto1} alt="photo1"
                             className="imgItemAbout"
                             style={{ borderRadius:"0.5em" ,
                                 marginTop:"1.5em" ,
                                 width:"10em" ,
                                 height:"13em" ,
                                 border:"3px solid mediumspringgreen"}}/>



                    </div>
                </div>

                <div className="row mainContent">

                    <div className="col-3 sidebar">
                        <div
                            className="row">
                            <div className="col-12 blue">
                                <img src={urlPhoto2} alt="photo2"
                                     className="imgItemAbout"
                                     style={{ borderRadius:"0.5em" ,
                                         marginTop:"1.5em" ,
                                         width:"7em" ,
                                         height:"9em" ,
                                         border:"3px solid mediumspringgreen"}}/>
                            </div>

                            <div className="col-12 blue">
                               <img src={urlPhoto3} alt="photo3"
                                     className="imgItemAbout"
                                     style={{ borderRadius:"0.5em" ,
                                         marginTop:"1.5em" ,
                                        width:"7em" ,
                                        height:"9em" ,
                                       border:"3px solid mediumspringgreen"}}/>
                            </div>
                            {/*<div className="col-12 blue">*/}
                            {/*    <img src={urlPhoto4} alt="photo4"*/}
                            {/*         className="imgItemAbout"*/}
                            {/*         style={{ borderRadius:"0.5em" ,*/}
                            {/*             marginTop:"1.5em" ,*/}
                            {/*             width:"10em" ,*/}
                            {/*             height:"13em" ,*/}
                            {/*             border:"3px solid mediumspringgreen"}}/>*/}
                            {/*</div>*/}
                            {/*<div className="col-12 blue">*/}
                            {/*    <img src={urlPhoto5} alt="photo5"*/}
                            {/*         className="imgItemAbout"*/}
                            {/*         style={{ borderRadius:"0.5em" ,*/}
                            {/*             marginTop:"1.5em" ,*/}
                            {/*             width:"10em" ,*/}
                            {/*             height:"13em" ,*/}
                            {/*             border:"3px solid mediumspringgreen"}}/>*/}
                            {/*</div>*/}
                            {/*<div className="col-12 pinkColor">*/}
                            {/*    <img src={urlPhoto6} alt="photo6"*/}
                            {/*         className="imgItemAbout"*/}
                            {/*         style={{ borderRadius:"0.5em" ,*/}
                            {/*             marginTop:"1.5em" ,*/}
                            {/*             width:"10em" ,*/}
                            {/*             height:"13em" ,*/}
                            {/*             border:"3px solid mediumspringgreen"}}/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-6 yellowColor">
                        <img src={urlPhoto7} alt="photo7"
                             className="imgItemAbout"
                             style={{ borderRadius:"0.5em" ,
                                 marginTop:"1.5em" ,
                                 width:"10em" ,
                                 height:"13em" ,
                                 border:"3px solid mediumspringgreen"}}/>
                    </div>
                    <div className="col-3 blue">
                        <img src={urlPhoto8} alt="photo8"
                             className="imgItemAbout"
                             style={{ borderRadius:"0.5em" ,
                                 marginTop:"1.5em" ,
                                 width:"7em" ,
                                 height:"9em" ,
                                 border:"3px solid mediumspringgreen"}}/>
                    </div>

                </div>

                <div className="row footer">
                    <div className="col-12 homeFooter">


                        <img src={urlPhoto9} alt="photo9"
                             className="imgItemAbout"
                             style={{ borderRadius:"0.5em" ,
                                 marginTop:"1.5em" ,
                                 width:"10em" ,
                                 height:"13em" ,
                                 border:"3px solid mediumspringgreen"}}/>
                    </div>
                </div>

            </div>

            <div className="photoHomeSources componentTagAbout">

                <h5 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>Photo sources</h5>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto1}>
                        <h6 className="colorLink">{urlPhoto1}</h6>
                    </a>
                </div>



                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto2}>
                        <h6 className="colorLink">{urlPhoto2}</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto3}>
                        <h6 className="colorLink">{urlPhoto3}</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto4}>
                        <h6 className="colorLink">{urlPhoto4}</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto5}>
                        <h6 className="colorLink">{urlPhoto5}</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto6}>
                        <h6 className="colorLink">{urlPhoto6}</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto7}>
                        <h6 className="colorLink">{urlPhoto7}</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto8}>
                        <h6 className="colorLink">{urlPhoto8}</h6>
                    </a>
                </div>



                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href={urlPhoto9}>
                        <h6 className="colorLink">{urlPhoto9}</h6>
                    </a>
                </div>

            </div>

        </>
    )
}
