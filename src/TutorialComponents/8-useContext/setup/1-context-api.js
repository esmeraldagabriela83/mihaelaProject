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
      <div>

          <PersonContext.Provider
              value={{removePerson , people}}
              style={{backgroundColor:"yellowgreen" , border:"3px solid black"}}>

          <h3 style={{marginBottom:"1.5em"}}>List of items</h3>
          <List />

              <button className="btn"
                      type="button"
                      style={{ marginBottom:"1.5em" ,
                          marginTop:"1.5em",
                          fontSize:"1em" ,
                          backgroundColor:"mediumspringgreen" ,
                          border:"3px solid indianred" ,
                          borderRadius:"1.5em"}}
                      onClick={() =>setPeople([])}//delite all items
              >Clear all items from the list</button>

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
      <button
          onClick={() => removePerson(id)}
          style={{ marginBottom:"1.5em" ,
              marginTop:"1.5em",
              fontSize:"1em" ,
              backgroundColor:"mediumspringgreen" ,
              border:"3px solid indianred" ,
              borderRadius:"1.5em"}}
      >Remove</button>
    </div>
  );
};

export default ContextAPI;
