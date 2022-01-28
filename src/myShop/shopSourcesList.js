
import React ,{useState} from "react";
import PhotographyShopListSources from "./photographyShopListSources";

export function ShopSourcesList() {

    const [show,setShow] = useState(false) ;

    return (
        <>

            {show && <PhotographyShopListSources/>}
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
                }}>{show ? "Hide item list shop photography sources" : "Show item list shop photography sources"}</button>



        </>
    )
}





