import React   from "react";
import "../App.css";
import MyShopComponent from "../myShop/myShopComponent";
import {ShopSourcesList} from "../myShop/shopSourcesList";
import MyShoppingCart from "../myShoppingCart/myShoppingCart";
import PhotoSourcesShoppingCart from "../myShoppingCart/photoSourcesShoppingCart";




function Shop(){

    return(
        <>
            <section style={{textAlign:"center"}}>

                    <MyShoppingCart/>

                    <MyShopComponent />

                    <PhotoSourcesShoppingCart />

                    <ShopSourcesList/>

            </section>
        </>
    );
}

export default Shop;



