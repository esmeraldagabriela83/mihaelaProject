import React from "react";

 function BasketShoppingCart(props) {

    const {cartItems , onAdd , onRemove}=props;

     const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
     const taxPrice = itemsPrice * 0.3;
     const shippingPrice = itemsPrice > 5000 ? 0 : 30;
     const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <>
            <aside>
                <hr style={{height:"0.15em" , backgroundColor:"orangered"}}></hr>
                <h2 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>Cart items</h2>
                <hr style={{height:"0.15em" , backgroundColor:"orangered"}}></hr>
                <div>
                    {cartItems.length === 0 && <h3 style={{marginTop:"1.5em" , paddingBottom:"1.5em"}}>Cart is empty</h3>}

                    {cartItems.map((item) =>{
                        return <div key={item.id} style={{display:"flex" , alignItems:"center" , justifyContent:"space-evenly"}}>
                            <div>{item.name}</div>
                            <div>
                                <button
                                    className="buttonShop"
                                    style={{ marginBottom:"0.5em" ,
                                        marginTop:"0.5em",
                                        marginRight:"0.5em",
                                        padding:"0.3em",
                                        fontSize:"1em" ,
                                        backgroundColor:"mediumspringgreen" ,
                                        border:"3px solid indianred" ,
                                        borderRadius:"50%"}}
                                    onClick={() => onAdd(item)}>+</button>
                                <button
                                    className="buttonShop"
                                    style={{ marginBottom:"0.5em" ,
                                        marginTop:"0.5em",
                                        marginLeft:"0.5em",
                                        padding:"0.3em",
                                        fontSize:"1em" ,
                                        backgroundColor:"mediumspringgreen" ,
                                        border:"3px solid indianred" ,
                                        borderRadius:"50%"}}
                                    onClick={() => onRemove(item)}>-</button>
                            </div>

                            <div>
                                {item.qty} x ${item.price.toFixed(2)}
                            </div>
                        </div>
                    })}
                </div>

                {cartItems.length !== 0 && (
                    <>
                        <hr style={{height:"0.15em" , backgroundColor:"orangered"}}></hr>

                        <div className="basketDiv">
                            <div>
                                <h5>Items price</h5>
                                <div>${itemsPrice.toFixed(2)}</div>
                            </div>

                            <div>
                                <h5>Tax price</h5>
                                <div>${taxPrice.toFixed(2)}</div>
                            </div>

                            <div>
                                <h5>Shipping price</h5>
                                <div>${shippingPrice.toFixed(2)}</div>
                            </div>
                        </div>

                        <hr style={{height:"0.15em" , backgroundColor:"orangered"}}></hr>
                        <div style={{paddingTop:"1.5em" , paddingBottom:"1.5em"}}>
                            <h5><strong>Total price</strong></h5>
                            <div><strong>${totalPrice.toFixed(2)}</strong></div>
                        </div>
                    </>
                )}

            </aside>
        </>
    )
}


export default BasketShoppingCart;