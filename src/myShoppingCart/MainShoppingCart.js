import React from "react";
import Product from "./productShoppingCart";

export function MainShoppingCart(props) {
    const {products , onAdd}=props;
    return (
        <>
            <main>

                <hr style={{height:"0.15em" , backgroundColor:"orangered"}}></hr>

                <h3 style={{marginTop:"1em" , marginBottom:"1em"}}>Products</h3>

                <hr style={{height:"0.15em" , backgroundColor:"orangered"}}></hr>

                <div>
                    {products.map((product) =>{
                        return <Product key={product.id}
                                        product={product} onAdd={onAdd}></Product>
                    })}
                </div>
            </main>
        </>
    )
}


