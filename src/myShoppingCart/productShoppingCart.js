
import React from "react";
import "../index.css";

function Product(props) {

    const {product ,onAdd }=props;

    return (
        <>
            <img className="shoppingCartImage" src={product.image} alt={product.name}></img>
            <h5 style={{marginBottom:"0.5em"}}>{product.name}</h5>
            <h5>${product.price}</h5>
            <div>
                {/*<button onClick={onAdd}>Add to cart</button>*/}
                <button
                    className="buttonShop"
                    style={{ marginBottom:"1.5em" ,
                        marginTop:"1.5em",
                        padding:"0.7em",
                        fontSize:"1em" ,
                        backgroundColor:"mediumspringgreen" ,
                        border:"3px solid indianred" ,
                        borderRadius:"1.5em"}}
                    onClick={() => onAdd(product)}>Add to cart</button>
            </div>
        </>
    )
}

export default Product;



