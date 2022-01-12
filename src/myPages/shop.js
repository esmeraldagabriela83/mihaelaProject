import React   from "react";
import "../App.css";
import MyShopComponent from "../myShop/myShopComponent";
import {ShopSourcesList} from "../myShop/shopSourcesList";




function Shop(){

    return(
        <>
            <section style={{textAlign:"center"}}>

                    <MyShopComponent />

                    <ShopSourcesList/>

            </section>
        </>
    );
}

export default Shop;



