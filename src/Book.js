import React from "react";

const price="$ 35";
const priceStyle={
    color:"greenyellow"
};

const discountText="discount";


const  Book = (props) =>{

    const {img , title , author }=props;

    const clickHandler=(event) =>{
        alert("hello people")
        console.log("verificare consola");
        console.log(event);
        console.log(event.target);
    }

    const complexExample=(author) =>{
        console.log(author);
    }

    return (
        <article className={"book"}  onMouseOver={
            () =>{console.log(title)}
        } >
            <img
                className={"imageBook"}
                src={img}
                alt=""/>
            <h1 className={"bookTitleClassForCSS"}
                onClick={() => console.log(title)}
            >{title}</h1>
            <h3 className={"bookAuthorCSS"} style={{backgroundColor:"orange" , borderRadius:"1.5rem"}}> {author} <br/> second group</h3>
            <h3 className={"bookPriceCSS"} style={priceStyle}>{price}</h3>
            {/*{props.children}*/}
            <p>{discountText.toUpperCase()}${5 +5}</p>
            {/*<h4>{props.bookClass}</h4>*/}
            {/*<h4>{props.classOne}</h4>*/}
            {/*<h4>{props.classTwo}</h4>*/}
            <button type="button" onClick={clickHandler}>Reference Example </button>

            <button type="button"
                    onClick={ () => complexExample(author)}
            >more complex example</button>
        </article>
    )
};

export default Book;