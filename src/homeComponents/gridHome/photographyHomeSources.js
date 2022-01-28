
import React,{Component} from "react";


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




class PhotographyHomeSources extends Component {
    constructor() {
        super();
        console.log("CONSTRUCT")
    }
    componentDidMount() {
        console.log("DID MOUNT")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("DID UPDATE")
    }

    componentWillUnmount() {
        console.log("WILL UNMOUNT")
    }

    render() {
        console.log("RENDER")
        return (
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

                    <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                        <a href={urlPhoto11}>
                            <h6 className="colorLink">{urlPhoto11}</h6>
                        </a>
                    </div>

                    <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                        <a href={urlPhoto12}>
                            <h6 className="colorLink">{urlPhoto12}</h6>
                        </a>
                    </div>

                    <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                        <a href={urlPhoto13}>
                            <h6 className="colorLink">{urlPhoto13}</h6>
                        </a>
                    </div>

                </div>
        )
    }
}

export default PhotographyHomeSources;