import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)



const ItemContext=React.createContext();


const ContextAPI = () => {
  const [items, setItems] = useState(data);
  const removeItem = (id) => {
      setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };



  if(items.length === 0){
      return(
          <main>
             <h3 style={{marginTop:"1.5em" , marginBottom:"1.5em" , paddingTop:"0.7em" , paddingBottom:"0.7em"}}>No items left in the list </h3>

          </main>
      )
  }

   return (
    <>
      <div>

          <ItemContext.Provider
              value={{removeItem , items}}
              style={{backgroundColor:"yellowgreen" , border:"3px solid black"}}>

          <h3 style={{marginBottom:"1.5em" ,marginTop:"1.5em" , paddingTop:"1.5em" }}>List of {data.length} items</h3>
          <List />

              <button className="btn"
                      type="button"
                      style={{ padding:"0.7em",
                          fontSize:"1em" ,
                          backgroundColor:"mediumspringgreen",
                          marginBottom:"1.5em" ,
                          border:"3px solid indianred" ,
                          borderRadius:"1.5em"}}
                      onClick={() =>setItems([])}//delite all items
              >Clear all items from the list</button>

          </ItemContext.Provider>
      </div>

    </>
  );
};

const List = () => {

    const mainData=useContext(ItemContext);
console.log("mainData is : " , mainData);

  return (
    <>
      {mainData.items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
          />
        );
      })}
    </>
  );
};

const SingleItem = ({ id, name ,quality , image , info}) => {

    const {removeItem}=useContext(ItemContext);
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
          onClick={() => removeItem(id)}
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
