import react,{useState} from 'react';

const CreateNode=(props)=>{
    const[text,setText]=useState({
        title:'',
        data:''
      });
      const sendtext=(event)=>{
        var values=event.target.value;
        var names=event.target.name;
        setText((previousdata)=>{
          return( {
            ...previousdata,
            [names]:values,
          });
        })
      }
      const addData=()=>{
        props.passNote(text);
            setText(()=>{
      return {title:'',
      data: ""};
    })
      }
    return<> 
    <div className='getdata'>
    <input type="text" onChange={sendtext} name="title" value={text.title} placeholder="Enter the title" />
    <input type="text" onChange={sendtext} name="data" value={text.data} placeholder="Enter the title" />
    <button onClick={addData} >ADD</button>
    </div>
    </>;
}
export default CreateNode;