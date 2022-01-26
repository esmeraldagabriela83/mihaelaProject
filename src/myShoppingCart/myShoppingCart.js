
import React from "react";
import "../index.css";
import {HeaderShoppingCart} from "./headerShoppingCart";
import {MainShoppingCart} from "./MainShoppingCart";
import BasketShoppingCart from "./BasketShoppingCart";
import data from "./dataShoppingCart";
import {useState} from "react";


function MyShoppingCart() {

    const {products} = data ;
    const [cartItems , setCartItems]=useState([]);

    const onAdd = (product) =>{

    const exist = cartItems.find(x => x.id === product.id);

    if(exist){
        setCartItems(cartItems.map(x =>x.id === product.id ? { ...exist , qty:exist.qty + 1} : x));
    }else{
        setCartItems([ ...cartItems , { ...product , qty:1}]);
    }

    }

    const onRemove=(product) =>{
        const exist = cartItems.find(x => x.id === product.id);

        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        }else{
            setCartItems(cartItems.map(x =>x.id === product.id ? { ...exist , qty:exist.qty - 1} : x));
        }

    }

    return (
       <>
           <h2 className="shopTitleList"
               style={{marginTop:"1.5em" ,marginBottom:"1.5em"}}>Shopping cart
           </h2>
           <div className="componentTagAbout">
               <HeaderShoppingCart countCartItems={cartItems.length}></HeaderShoppingCart>
               <MainShoppingCart products={products} onAdd={onAdd} ></MainShoppingCart>
               <BasketShoppingCart
                   cartItems={cartItems}
                   onAdd={onAdd}
                   onRemove={onRemove}></BasketShoppingCart>

           </div>
       </>
    )
}

export default MyShoppingCart;



