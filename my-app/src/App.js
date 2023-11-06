import React,{useState, useEffect} from 'react'
import axios from 'axios'
const App = () => {
  const[item,setItem]=useState([])
  const[newtask,setNewtask]=useState('')
  useEffect(()=>{
    axios.get('http://localhost:5000/gettask').then(array=>setItem(array.data))
  },[])
  
const submitHandler=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:5000/addtask',{todo:newtask}).then(array=>setItem(array.data))
  }
const deleteHandler=(id)=>{
axios.delete(`http://localhost:5000/delete/${id}`).then(array=>setItem(array.data))
}




  return (
    <div><center> Todo list App
    <form onSubmit={submitHandler}>
    <input type="text" value={newtask} onChange={(e)=>setNewtask(e.target.value)}/>
    <input type="submit" value="submit"/>
    
    </form><br/>



    {item.map(task=><div key={task._id}>
      <h3>{task.todo}</h3><button onClick={()=>deleteHandler(task._id)}>Delete</button></div>)}
   
    </center>
    </div>
  )
}

export default App