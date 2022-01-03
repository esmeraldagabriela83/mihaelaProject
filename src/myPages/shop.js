import React  , {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import "../App.css";

function Shop(){

    const [items , setItems]=useState([]);
    useEffect(() =>{
        fetchItems();
    } , []);

    const fetchItems= async() =>{
        const data=await fetch("https://course-api.com/javascript-store-products");

        const items=await data.json();
        console.log("items from the shop page" , items);
        //items from the shop page (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        setItems(items);
    };

    return(
        <>
            <section style={{textAlign:"center"}}>
            <div >
                <h2> Items with id :</h2>
            </div>

            <ul className="ulShop">
                {items.map((item) =>{
                   return (
                       <>
                           <li key="item.id" >
                               <Link to={`/shop/${item.id}`} style={{color:"mediumspringgreen"}}>The id of the item is {item.id} .</Link>
                           </li>
                       </>
                   )
                    })}
            </ul>
            </section>
        </>
    );
}

export default Shop;

////https://course-api.com/javascript-store-products   from testing two free code camp

