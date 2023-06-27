import React, { useState } from "react";
import Header from "./Header";
import CreateNode from "./CreateNote";
import Note from "./Note";
import './App.css';
const App=()=>{
  const[array,setToArray]=useState([]);
   
  
  const addToArray=(text)=>{
    setToArray((previous)=>{
      return[ ...previous,
      text];
    })    
  }
  const deleteIteam=(idd)=>{
    setToArray((prevdata)=>{
      return prevdata.filter((arr_value,index)=>{
       return index !==idd;
      }) 
     })
  }
return <>
      <Header/>
<CreateNode passNote={addToArray}/>
<div className="middle">
      {array.map((values,index)=>{
        return<>
        <Note
          key={index}
          id={index}
          title={values.title}
          content={values.data}
           deleteItem={deleteIteam} 
          /></>;
      })}</div>
      </>
}

export default App;