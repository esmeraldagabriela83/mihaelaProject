import React  , {useState , useEffect} from "react";
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
            <div >
                <h1> Shop Page</h1>
            </div>

            <ul className="ulShop">
                {items.map((item) =>{
                   return (
                       <>
                           <li key="item.id">The id of the item is {item.id} .</li>
                       </>
                   )
                    })}
            </ul>
        </>
    );
}

export default Shop;

////https://course-api.com/javascript-store-products   from testing two free code camp

///https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get    has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
//tutorial : https://www.youtube.com/watch?v=Law7wfdg_ls&t=646s
