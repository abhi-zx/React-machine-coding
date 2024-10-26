import './App.css';
import { useState } from 'react'

function App() {

  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [isEdit,setIsEdit] =useState(false)
  const [editIndex,setEditIndex] =useState(false)

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleData = () => {
    if(isEdit){
      data[editIndex].text = value
      setData([...data]);
      setIsEdit(false)
      setValue('')
     }
     else{
      setData([...data, {text:value,isCompleted:false}])
      setValue("")
     }
    
    
  }
const style ={
  todo:{
    display:"flex",
    height:"30px",
    alignItems:"center",
    padding:"10px"
  }
}

const handleDelete = (index)=>{
  const newData = data.filter((_,i)=> i != index)
  setData(newData);
}

const handleEdit =(index,val)=>{
  setValue(val.text)
  setIsEdit(true)
  setEditIndex(index)
 
}

const handleToggle =()=>{
  
}
  return (

    <div className='conatiner'>
     
      <div className='todo-app'>
      <h3>Todo App</h3>
      <input value={value} onChange={handleChange}></input>
      <button onClick={handleData}>{isEdit?"Update":"Add"}</button>
      
      
      <div>
        {data.map((val, index) => {
          return <div style={style.todo} key={index}>
          <p onClick={()=>handleToggle()}>{val.text}</p>  
          <button onClick={()=>handleEdit(index,val)}>Edit</button>
          <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>

        })}
      </div>
    </div>
    </div>
  );
}

export default App;
