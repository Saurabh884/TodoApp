
import React,{ useState } from 'react';
import './App.css';

function App() {
const [todo , setTodo] = useState("");
const [todos,setTodos] = useState([]);
const [editId , setEditId] = useState(0)

const handleSubmit = (e) => {
   e.preventDefault();
   
   if(editId){
    const editTodo = todos.find((i)=>i.id === editId);
    const updatedTodos = todos.map((t)=>t.id===editTodo.id?(t={id:t.id,todo}):{id:t.id,todo:t.todo});
    setTodos(updatedTodos);
    setEditId(0);
    setTodo("");
    return;
   }

if(todo!==""){
  setTodos([{
    id:`${todo}-${Date.now()}`, 
    todo
  },...todos])
  setTodo("")
}
};

const handleDelete = (id) => {
  const delTodo = todos.filter((elem)=>elem.id !== id);
  setTodos([...delTodo])
}
 
const handleEdit = (id) => {

  const editTodo = todos.find((i)=>i.id === id)
  setTodo(editTodo.todo)
  setEditId(id)

}

  return (
    <div className="App">
           <div className="container">
                <h1>Todo List App</h1>
                   <form className='todoForm'onSubmit={handleSubmit} >
                       <input value={todo} type="text" onChange={(e)=>setTodo(e.target.value)} />
                       <button type='submit' > {editId?"Edit" : "Add" }  </button>
                   </form>

                   <ul className='allTodos' >
                    {
                      todos.map((elem)=>(
                        <li className='singleTodo'> <span className='todoText' key={elem.id} >{elem.todo}</span>
                        <button onClick={()=>handleEdit(elem.id)} > Edit </button>
                        <button onClick={()=>handleDelete(elem.id)} >Delete</button>
                         </li>
                      )

                      )
                    }
                        
                        
                       
                        
                   </ul>
                  
           </div>
    </div>
  );
}

export default App;
