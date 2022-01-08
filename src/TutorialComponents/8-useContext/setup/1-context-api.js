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



  if(people.length === 0){
      return(
          <main>
             <h3>No items left in the list </h3>

          </main>
      )
  }

   return (
    <>
      <div>

          <PersonContext.Provider
              value={{removePerson , people}}
              style={{backgroundColor:"yellowgreen" , border:"3px solid black"}}>

          <h3 style={{marginBottom:"1.5em" ,marginTop:"1.5em" , paddingTop:"1.5em" }}>List of {data.length} items</h3>
          <List />

              <button className="btn"
                      type="button"
                      style={{ padding:"0.7em",
                          fontSize:"1em" ,
                          backgroundColor:"mediumspringgreen" ,
                          border:"3px solid indianred" ,
                          borderRadius:"1.5em"}}
                      onClick={() =>setPeople([])}//delite all items
              >Clear all items from the list</button>

              <h5 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>Photo sources</h5>

              <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                  <a href="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80">
                      <h6 className="colorLink">https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80</h6>
                  </a>
              </div>

              <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                  <a href="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80">
                      <h6 className="colorLink">https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80</h6>
                  </a>
              </div>

              <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                  <a href="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                      <h6 className="colorLink">https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80</h6>
                  </a>
              </div>

              <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                  <a href="https://images.unsplash.com/photo-1581067721837-e4809b29692d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80">
                      <h6 className="colorLink">https://images.unsplash.com/photo-1581067721837-e4809b29692d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80</h6>
                  </a>
              </div>

              <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                  <a href="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                      <h6 className="colorLink">https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80</h6>
                  </a>
              </div>

              <div style={{marginTop:"0.5em" , marginBottom:"0.5em" , paddingBottom:"2em"}}>
                  <a href="https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80">
                      <h6 className="colorLink">https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80</h6>
                  </a>
              </div>

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

const SinglePerson = ({ id, name ,quality , image , info}) => {

    const {removePerson}=useContext(PersonContext);
    console.log("inside SingleItem" , data);//(4) [{…}, {…}, {…}, {…}]

    const [readMore , setReadMore]=useState(false) ;

  return (
    <div className='item' style={{alignItems:"center"}}>
        <h4 style={{marginBottom:"0.3em"}}>{name}</h4>
        <h4>{quality}</h4>
        {/*<h6>{info}</h6>*/}

        <h6 style={{marginLeft:"3em" , marginRight:"3em"}}>{readMore ? info : `${info.substring(0 , 200)}...`}
            <button
                style={{ marginBottom:"0.5em" ,
                    marginTop:"0.5em",
                    padding:"0.3em",
                    fontSize:"1em" ,
                    backgroundColor:"mediumspringgreen" ,
                    border:"3px solid indianred" ,
                    borderRadius:"1.5em"}}
                onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show less" : "Read more info"}
            </button>
        </h6>

        {/*<h6>Image : {image}</h6>*/}

        <div>
            <img src={image} alt="name" className="imgItemAbout"
                 style={{ borderRadius:"0.5em" ,
                     marginTop:"1.5em" ,
                     width:"15em" ,
                     height:"20em" ,
                     border:"3px solid mediumspringgreen"}}/>
        </div>

      <button
          onClick={() => removePerson(id)}
          style={{ marginBottom:"1.5em" ,
              marginTop:"1.5em",
              padding:"0.7em",
              fontSize:"1em" ,
              backgroundColor:"mediumspringgreen" ,
              border:"3px solid indianred" ,
              borderRadius:"1.5em"}}
      >Remove item</button>
    </div>
  );
};

export default ContextAPI;
