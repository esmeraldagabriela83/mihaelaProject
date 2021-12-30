import React from "react";
import ReactDOM from "react-dom";
//import CSS
import './index.css';
import {books} from "./Books";
import Book from "./Book";

import {greeting} from "./testingFolder/TestingFile";
//SET UP VARS

/*const author="Mihaela Gabriela A";
const title="Book Title";
const myImg="https://images.unsplash.com/" +
    "photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=" +
    "crop&w=1173&q=80";*/
///////////////////////////////////////////////////////////////
/*const firstBook={
    myImg:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    title:"Ocean Nature",
    author:"Mihaela Gabriela A"
}

const secondBook={
    myImg:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
    title:"Land Nature",
    author:"Mihai Gabriel A"
}*/



//common function
/*function Greeting(){
    return <h3>I am Mihaela and this is my first component</h3>
}*/

//arrow function
/*const Greeting=() =>{
    return React.createElement('h3' , {} , 'I am Gabriela and this is my first component' )
}*/

/*const Greeting=() =>{
    return React.createElement(
        'div' ,
        {} ,
        React.createElement('h3' , {} , 'another try and it works') )
}*/

/*<img src='' alt=''/>
        <input type='text'name='' id='' value={"input text my default"}/>*/

/*function Greeting(){
return(
    <>
        <h3>I am Mihaela Gabriela and this is my first component , I am a h3 inside the fragment</h3>
        <PersonMe/>
        <MessageMe/>
        <AfterTutorial/>
        <ul >
            <li style={{textDecoration:"overline" , border:"3px dashed red"}}>
                <a href="#" style={{color:"green" , fontSize:"2.5em" , textDecoration: "underline 5px skyblue"}}>myContact text</a>
            </li>
        </ul>

    </>
)
}
///
const PersonMe=() =><h2>Me and you</h2>;

const MessageMe=() =>{
    return <h3>my message is to learn from tutorials</h3>
}

const AfterTutorial=() =>{
    return (
        <>
            <h2 style={{color:"skyblue" , border:"3px dashed darkblue" , backgroundColor:"gray"}}>I am the text inside the  AfterTutorial const , h2 tag.</h2>
            <h3 style={{color:"pink" , border:"3px dotted darkred" , backgroundColor:"gray"}}>I am the text inside the  AfterTutorial const , h3 tag.</h3>
        </>
    )
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function BookList(){
//     return(
//         <section
//             style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}
//             className={"bookList"}
//         >
//             <Book/>
//         </section>
//     )
// }
// const price="$ 35";
// const Book = () =>{
//     const title="Book Title";
//     const priceStyle={
//         color:"pink"
//     };
//     const author="Mihaela Gabriela A";
//     const discountText="discount";
//     return (
//         //<article className={"book"}><Image/></article>
//         <article className={"book"}>
//             <img
//                 className={"imageBook"}
//                 src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
//                 alt=""/>
//             <h1 className={"bookTitleClassForCSS"}>{title}</h1>
//             <h3 className={"bookAuthorCSS"} style={{backgroundColor:"orange" , borderRadius:"1.5rem"}}> {author.toUpperCase()} <br/> second group</h3>
//             <h3 className={"bookPriceCSS"} style={priceStyle}>{price}</h3>
//             <p>{discountText.toUpperCase()}${5 +5}</p>
//         </article>
//     )
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*const Image=() =><img
    className={"imageBook"}
    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
    alt=""/>*/



//const Title=() =><h1 className={"bookTitleClassForCSS"}>Book Title</h1>

//const Author=() =><h3 className={"bookAuthorCSS"} style={{color:"orange"}}>Mihaela Gabriela A <br/> second group</h3>

//const PriceBook=() =><h3 className={"bookPriceCSS"}>$ 35</h3>

//pt a doua poza

/*const BookSecond=() =>{
    return (
        <article className={"book"}><ImageSecond/></article>
    )
};

const ImageSecond=() =><img
    className={"imageBook"}
    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
    alt=""/>

const PriceBookSecond=() =><h3 className={"bookPriceCSS"}>$ 75</h3>*/

///////////////////////////////////////

// function BookList(){
//     return(
//         <section className={"bookList"}>
//             <Book bookClass={"Nature Book"} img={firstBook.myImg} title={firstBook.title} author={firstBook.author}>
//                 <p className={"loremParagraphTag"}>
//                     Do not pollute the water .<br/>
//                     {/*I am a text inside the p tags which is between the opening and closing tags of Book tag.*/}
//                 </p>
//             </Book>
//             <h1>I am a text between the Book tags .</h1>
//             <Book classOne={"Number"} classTwo={1} img={secondBook.myImg} title={secondBook.title} author={secondBook.author}/>
//         </section>
//     )
// }



function BookList(){

    console.log(greeting);

    return(
        <section className={"bookList"}>
            {books.map((book) =>{     //adaug al doilea parametru index daca la key scriu index in loc de book.id
                //const {img , title , author}=book;
                // console.log(book);
                // return <Book img={myImg} title={title} author={author}></Book>

                //return <Book  key={index}  book={book}/>
                //sau
                return <Book  key={book.id}  {...book}/>
            })}
        </section>
    )
}



ReactDOM.render(<BookList/> , document.getElementById("root"));



