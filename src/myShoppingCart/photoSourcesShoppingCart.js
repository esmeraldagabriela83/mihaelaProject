
import React ,{useState} from "react";
import "../index.css";
import PhotographyShoppingCartSources from "./photographyShoppingCart"

function PhotoSourcesShoppingCart() {

    const [show,setShow] = useState(false) ;

    return (
        <>

            {show && <PhotographyShoppingCartSources/>}
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
                }}>{show ? "Hide item shopping cart photography sources" : "Show item shopping cart photography sources"}</button>

        </>
    )
}

export default PhotoSourcesShoppingCart;



