import React  , {useState , useEffect} from "react";
import { useParams , Link} from "react-router-dom";
import "../App.css";

// const url=`https://course-api.com/javascript-store-products`

function Item(){
    const {id}=useParams() ;

    return(
        <>
            <div
               className="componentTagAbout"
                style={{display:"flex" , alignItems:"center"  , justifyContent:"center" ,
            marginTop:"1.5em" , marginBottom:"1.5em" , padding:"0.7em"}}>
                <h1>Item id :</h1>
                <h1 style={{letterSpacing:"0.1em"}}>{id}</h1>
            </div>
        </>
    )
}
export default Item;
