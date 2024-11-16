import {useState} from 'react'

function To() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

 const handleAdd = ()=>{
    if(newTodo.trim()){
      setTodos([...todos,newTodo]);
      setNewTodo('');
    }
  }

  const handleSave = ()=>{
    const update = todos;
    update[editIndex] = newTodo;
    setTodos(update);
    setNewTodo('');
    setEditIndex(null);

  }

  const handleEdit = (index)=>{
    setEditIndex(index);
    setNewTodo(todos[index]);

  }

  const handleDelete = (index) => {
    const update = todos.filter((_, i) => i !== index);
    setTodos(update);
  }
  return (
    <div>
      <input type="text" value = {newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
      <button onClick={editIndex!==null ? handleSave:handleAdd}>{editIndex!==null?'Save':'Add'}</button>

      <ul>
        {todos.map((todo,index)=>(
        <li key={index}>
          {todo}
          <button onClick = {()=>handleEdit(index)}>Edit</button>
          <button onClick = {()=>handleDelete(index)}>Delete</button>
        </li>
        ))}
      </ul>

    </div>
  )
}

export default To