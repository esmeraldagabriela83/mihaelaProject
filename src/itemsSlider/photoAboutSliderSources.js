
import React ,{useState} from "react";
import PhotographyAboutSliderSources from"./photographyAboutSliderSources";

export function PhotoAboutSliderSources() {

    const [show,setShow] = useState(false) ;

    return (
        <>
            {show && <PhotographyAboutSliderSources/>}
            <button
                style={{ marginBottom:"1.5em" ,
                    marginTop:"1.5em",
                    padding:"0.7em",
                    fontSize:"1em" ,
                    backgroundColor:"mediumspringgreen" ,
                    border:"3px solid indianred" ,
                    borderRadius:"1.5em",
                    marginLeft: "17vw",
                    marginRight: "17vw"
                }}
                onClick={() => {
                    setShow(!show);
                }}>{show ? "Hide slider photography sources" : "Show slider photography sources"}</button>
        </>
    )
}





