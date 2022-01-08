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

    const fetchItems= async() =>{
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
                <div className="title">
                    <h2>no items left</h2>
                    <button
                        style={{fontSize:"2em" ,
                            backgroundColor:"yellow" ,
                            color:"blue"}}
                        onClick={() => fetchItems()}>refresh items</button>
                </div>
            </main>
        )
    }

    return (
        <main>

            <>
                <section style={{textAlign:"center"}}>

                    <ul className="ulShop">

                        {items.map((item) =>{
                            return (
                                <>

                                    <div className="componentTagAbout">
                                        <div  style={{marginTop:"1.5em" ,marginBottom:"0.5em"}}>
                                            <h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em" , paddingTop:"1.5em"}}>The name of the item is <h3>{item.fields.name}</h3> </h5>
                                            <h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em"}}>The id of the item is <h3>{item.id}</h3> </h5>
                                            <h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em"}}>The price of the item is <h3>{item.fields.price}</h3></h5>
                                            <h5 style={{marginTop:"0.7em" ,marginBottom:"0.7em"}}>The company of the item is <h3>{item.fields.company}</h3></h5>
                                        </div>

                                        <li key={item.id} >

                                            {/*<Link to={`/shop/${item.id}`} style={{color:"mediumspringgreen"}}>The id of the item is {item.id} .</Link>*/}
                                            <Link
                                                to={`/shop/${item.id}`}>
                                                {/*{item.fields.name}*/}
                                                {/*{item.fields.price}*/}
                                                {/*{item.fields.company}*/}
                                                {item.fields.image.map((image) =>{
                                                    return (
                                                        <div >
                                                            <img key={image.id} src={image.url} alt={item.name}
                                                                 style={{ borderRadius:"0.5em" ,
                                                                     marginBottom:"1.5em" ,
                                                                     width:"27em" ,
                                                                     height:"20em" ,
                                                                     boxShadow:"3px 3px 5px gray",
                                                                     border:"3px solid mediumspringgreen"}}/>
                                                        </div>
                                                    )
                                                })}
                                            </Link>
                                        </li>


                                        <button onClick={() => removeItem(item.id)}>Remove item</button>

                                    </div>

                                </>
                            )
                        })}

                    </ul>



                    <h5 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>Photo sources</h5>

                    <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                        <a href="https://course-api.com/javascript-store-products">
                            <h6 className="colorLink">https://course-api.com/javascript-store-products</h6>
                        </a>
                    </div>

                    <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                        <a href="https://www.youtube.com/watch?v=4UZrsTqkcW4&t=32822s">
                            <h6 className="colorLink">https://www.youtube.com/watch?v=4UZrsTqkcW4&t=32822s</h6>
                        </a>
                    </div>

                </section>



            </>

            <button
                onClick={() =>setItems([])}
                style={{fontSize:"2em" ,
                    backgroundColor:"blue" ,
                    color:"white"}}
            >Remove all items at once</button>

        </main>
    )
// ///////////////////////////////////////////////////////////////
//     return(
//
//     );
}

export default MyShopComponent;

