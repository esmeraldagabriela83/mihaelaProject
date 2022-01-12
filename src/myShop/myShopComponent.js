import React  , {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import "../App.css";




function MyShopComponent(){

    const [items , setItems]=useState([]);

    const removeItem=(id) =>{
        const newItem=items.filter((item) => item.id !==id);
        setItems(newItem);
    }

    useEffect(() =>{
        fetchItems();
    } , []);

    const fetchItems = async() =>{
        const data=await fetch("https://course-api.com/javascript-store-products");

        const items=await data.json();
        console.log("items from the shop page" , items);
        //items from the shop page (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        setItems(items);
    };


///////////////////////////////////////////////////////////////////////////////////
    if(items.length === 0){
        return(
            <main>
                <div className="title shopTitleList">
                    <h2 style={{marginTop:"1.5em" ,marginBottom:"0.5em"}}>No items left</h2>

                    <button
                        className="buttonShop"
                        style={{ marginBottom:"1.5em" ,
                            marginTop:"1.5em",
                            padding:"0.7em",
                            fontSize:"1em" ,
                            backgroundColor:"mediumspringgreen" ,
                            border:"3px solid indianred" ,
                            borderRadius:"1.5em"}}
                        onClick={() => fetchItems()}>Refresh list of items</button>
                </div>
            </main>
        )
    }

    return (
        <main>

            <>
                <section style={{textAlign:"center"}}>
                    <h2
                        className="shopTitleList"
                        style={{marginTop:"1.5em" ,marginBottom:"0.5em"}}>List of {items.length} items</h2>
                    <ul className="ulShop">

                        {items.map((item) =>{
                            return (
                                <>
                                    <div className="componentTagAbout">
                                        <div  style={{marginTop:"1.5em" ,marginBottom:"0.5em"}}>
                                            <h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em" , paddingTop:"1.5em"}}>The name of the item is : <span>{item.fields.name} .</span> </h5>
                                            {/*<h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em"}}>The id of the item is <span>{item.id}</span> . </h5>*/}
                                            <h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em"}}>The price of the item is : <span>{item.fields.price} .</span></h5>
                                            <h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em"}}>The company of the item is : <span>{item.fields.company} .</span></h5>
                                        </div>

                                        <li key={item.id}>

                                            {/*<Link to={`/shop/${item.id}`} style={{color:"mediumspringgreen"}}>The id of the item is {item.id} .</Link>*/}

                                            <Link to={`/shop/${item.id}`} style={{color:"mediumspringgreen"}} >
                                                {item.fields.name}
                                                {item.fields.price}
                                                {item.fields.company}
                                                {item.fields.image.map((image) =>{
                                                    return (
                                                        <div >
                                                            <img key={image.id} src={image.url} alt={item.name}
                                                                 style={{ borderRadius:"0.5em" ,
                                                                     marginBottom:"1.5em" ,
                                                                     marginTop:"1.5em" ,
                                                                     width:"27em" ,
                                                                     height:"20em" ,
                                                                     boxShadow:"3px 3px 5px gray",
                                                                     border:"3px solid mediumspringgreen"}}/>
                                                        </div>
                                                    )
                                                })}
                                            </Link>
                                        </li>


                                        <button
                                            className="buttonShop"
                                            style={{ marginBottom:"1.5em" ,
                                                marginTop:"1.5em",
                                                padding:"0.7em",
                                                fontSize:"1em" ,
                                                backgroundColor:"mediumspringgreen" ,
                                                border:"3px solid indianred" ,
                                                borderRadius:"1.5em"}}
                                            onClick={() => removeItem(item.id)}>Remove item</button>

                                    </div>

                                </>
                            )
                        })}

                    </ul>

                </section>

            </>

            <button
                className="buttonShop"
                onClick={() =>setItems([])}
                style={{ marginBottom:"1.5em" ,
                    marginTop:"1.5em",
                    padding:"0.7em",
                    fontSize:"1em" ,
                    backgroundColor:"mediumspringgreen" ,
                    border:"3px solid indianred" ,
                    borderRadius:"1.5em"}}
            >Remove all items at once</button>



        </main>
    )
// ///////////////////////////////////////////////////////////////
//     return(
//
//     );
}

export default MyShopComponent;

