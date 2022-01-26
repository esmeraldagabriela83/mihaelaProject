
import React from "react";

export function HeaderShoppingCart(props) {

    const {countCartItems}=props;

    return (
        <>
        <header style={{display:"flex" , alignItems:"center" , justifyContent:"space-evenly"}}>

                <h2>
                    <ion-icon name="basket"
                              style={{fontSize:"2.5em" , marginTop:"0.25em" , marginBottom:"0.15em"}}></ion-icon>
                </h2>

            {/*<a href="#/cart">Cart with {" "}<span>{countCartItems}</span> items </a>*/}
            <h3>Cart  {" "}<em>{countCartItems ? (<h3>{countCartItems}</h3>) : ("0")}</em> </h3>
        </header>
        </>
    )
}





