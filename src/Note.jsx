import React from "react";
const Note=(props)=>{
    const deletee=()=>{
        props.deleteItem(props.id);
    }
    return<>
        <div className="notes">
                <h1>{props.title}</h1>
            <p >{props.content}</p>
            <div className="bttn">
             <button onClick={deletee}>⚔️</button></div>
        </div>    </>;
}
export default Note;