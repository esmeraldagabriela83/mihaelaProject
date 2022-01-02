import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext=React.createContext();


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <div style={{border:"15px dashed yellow" , backgroundColor:"black" , padding:"3em"}}>

          <PersonContext.Provider
              value={{removePerson , people}}
              style={{backgroundColor:"yellowgreen" , border:"3px solid black"}}>

          <h3 style={{color:"white"}}>context API // useContext</h3>
          <List />

              <button className="btn"
                      type="button"
                      style={{border:"5px dashed yellow"}}
                      onClick={() =>setPeople([])}//sterge toate persoanele
              >clear person ITEMS // ALL PERSONS // I am a button from 3-useState-array.js</button>

          </PersonContext.Provider>
      </div>
    </>
  );
};

const List = () => {

    const mainData=useContext(PersonContext);
console.log("mainData is : " , mainData);

  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {

    const {removePerson}=useContext(PersonContext);
    console.log("inside SinglePerson" , data);//(4) [{…}, {…}, {…}, {…}]

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
