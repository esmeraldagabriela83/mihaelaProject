import React, { useState, useReducer } from 'react';
import Modal from './Modal';

import {reducer} from"./MyReducer";
// reducer function

const defaultState={
  people:[],
  isModalOpen: false,
  modalContent: "hello me"
};

const Index = () => {

  const [name , setName]=useState("");
  const [state , dispatch]=useReducer(reducer , defaultState);



  const handleSubmit=(event) =>{
    event.preventDefault();
    if(name){
      const newItem={id:new Date().getTime().toString() , name}
      dispatch({type:"ADD_ITEM", payload:newItem})
      setName("");

    }else{
      dispatch({type:"NO_VALUE"});
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
      <>
        <div >
          {/*<h2>useReducer</h2>*/}
          {state.isModalOpen && (
              <Modal closeModal={closeModal} modalContent={state.modalContent} />
          )}
          <form
                onSubmit={handleSubmit}
                className="form" >
            <div >
              <div style={{marginTop:"1.5em" , marginBottom:"1.5em" ,  paddingTop:"1.5em"}}>
                <label htmlFor='name' >Item Name :</label>
              </div>
              <div>
                <input className="inputItemAbout"
                    style={{
                        color:"wheat",
                        fontSize:"1em",
                        border:"3px solid mediumspringgreen" ,
                        backgroundColor:"indianred" ,
                        padding:"0.5em",
                        borderRadius:"0.5em"}}
                    type="text"
                    value={name}
                    onChange={(event) =>setName(event.target.value)}/>
              </div>
            </div>
            <button type="submit"
                    style={{ marginBottom:"1.5em" ,
                      marginTop:"1.5em",
                      padding:"0.7em",
                      fontSize:"1em" ,
                      backgroundColor:"mediumspringgreen" ,
                      border:"3px solid indianred" ,
                      borderRadius:"1.5em"}}>
              Add Item
            </button>
          </form>
          {state.people.map((person) =>{
            return (
                <>
              <div key={person.id} className="componentTagAbout">
                <h4>My id is number {person.id} and my value is {person.name} .</h4>
                <button
                    type="button"
                    style={{marginTop:"1.5em" ,marginBottom:"1.5em" , padding:"0.7em", fontSize:"1em" , backgroundColor:"mediumspringgreen" , border:"3px solid indianred" , borderRadius:"1.5em"}}
                    onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:person.id}) }>Remove Item</button>
              </div>
                </>
            )
          })}

        </div>
      </>
  )
};

export default Index;
