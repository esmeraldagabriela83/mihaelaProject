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

                <h3 style={{paddingTop:"1.5em"}}>Slider of {items.length} items</h3>


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

                <h5 style={{marginTop:"-2.5em"}}>Photo sources</h5>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1554475659-edf5d531d08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1554475659-edf5d531d08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em", paddingBottom:"2em" }}>
                    <a href="https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80</h6>
                    </a>
                </div>

        </section>
    )
}

export default Slider;