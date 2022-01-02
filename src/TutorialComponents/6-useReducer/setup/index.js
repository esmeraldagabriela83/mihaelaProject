import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
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

  // const [people , setPeople]=useState(data);
  // const [showModal ,setShowModal]=useState(false);

  const handleSubmit=(event) =>{
    event.preventDefault();
    if(name){
      const newItem={id:new Date().getTime().toString() , name}
      dispatch({type:"ADD_ITEM", payload:newItem})
      setName("");
      // setShowModal(true);
      // setPeople([...people , {id: new Date().getTime().toString() , name} ] );
      // setName("");
    }else{
      // setShowModal(true);
      dispatch({type:"NO_VALUE"});
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
      <>
        <div style={{border:"5px dotted darkgreen"}}>
          <h2>useReducer</h2>

          {/*{showModal && <Modal/>}*/}
          {state.isModalOpen && (
              <Modal closeModal={closeModal} modalContent={state.modalContent} />
          )}
          <form
                style={{border:"5px solid yellow"}}
                onSubmit={handleSubmit}
                className="form" >
            <div style={{backgroundColor:"pink"}}>
              <label htmlFor='name'>Name : </label>
              <input
                  style={{border:"3px solid red"}}
                  type="text"
                  value={name}
                  onChange={(event) =>setName(event.target.value)}/>
            </div>
            <button type="submit" >Add person</button>
          </form>
          <h6 style={{color:"green" , fontSize:"1.5em"}}>If my name is not a number then I  am from data.js</h6>
          {state.people.map((person) =>{
            return (
                <>
              <div key={person.id} className="item">
                <h4>My id is number {person.id} and my name is {person.name} .</h4>
                <button
                    type="button"
                    style={{color:"green" , border:"3px solid darkgreen" , borderRadius:"20%"}}
                    onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:person.id}) }>remove person</button>
              </div>
                </>
            )
          })}

        </div>
      </>
  )
};

export default Index;
