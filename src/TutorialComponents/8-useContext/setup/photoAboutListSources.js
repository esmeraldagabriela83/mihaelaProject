
import React ,{useState} from "react";
import PhotographyAboutListSources from "./photographyAboutListSources";

export function PhotoAboutListSources() {

    const [show,setShow] = useState(false) ;

    return (

        <>

            {show && <PhotographyAboutListSources/>}
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
                }}>{show ? "Hide item list photography sources" : "Show item list photography sources"}</button>

        </>
    )
}





