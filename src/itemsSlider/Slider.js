import React, { useState, useEffect } from 'react';
import dataSlider from './dataSlider';
import "./indexSlider.css" ;


function Slider() {

    const [items , setItems]=useState(dataSlider);
    const [index , setIndex]=useState(0);

    useEffect(()=> {
        const lastIndex = items.length -1 ;

        if(index < 0){
            setIndex(lastIndex);
        }

        if(index > lastIndex){
            setIndex(0);
        }

    } , [index , items])


    useEffect(() =>{
        let slider = setInterval(() => {setIndex(index + 1)} , 5000);
        return () => clearInterval(slider) ;
    } , [index])

    return (
        <section className="section">

                <h3 style={{paddingTop:"1.5em" , marginTop:"1.5em"}}>Slider of {items.length} items</h3>


            <div className="section-center">
                {items.map((item , itemIndex) =>{
                    const {id , image , name , quality , quote} = item ;

                    let position="nextSlide" ;

                    if(itemIndex === index){
                        position = "activeSlide" ;
                    }

                    if(
                        itemIndex === index - 1 ||
                        (index === 0 && itemIndex === items.length -1)
                    ){
                        position="lastSlide";
                    }

                    return <article  className={position} key={{id}}>
                        <img src = {image} alt={name} className="item-img"/>
                        <h4 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>{name} item</h4>
                        <h4 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>{quality}</h4>
                        <h6 style={{marginTop:"0.5em" , marginLeft:"3em" , marginRight:"3em"}}>{quote}</h6>
                    </article>
                })}

                <button
                    className="prev" onClick={() => setIndex(index - 1)}>
                    Previous item
                </button>

                <button
                    className="next" onClick={() => setIndex(index + 1)}>
                    Next item
                </button>

            </div>
        </section>
    )
}

export default Slider;