import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";

function Axio() {
    const [data,setdata] = useState([]);
    const [post,setpost] = useState('');

    const Api_url = 'https://jsonplaceholder.typicode.com/posts';

    // get request 
   const fetchPost = async ()=>{
    try{
        const response = await axios.get(Api_url);
        setdata(response.data);
    } catch(error){
        console.log("error in submitting data",error);
        
    }
   }

    // post request

    const submitPost = async ()=>{
        try{
            const ids = uuidv4();
            const response = await axios.post(Api_url,{title:post,id:'ids'});
            console.log(response.data);
            console.log(uuidv4());
            
            
            setdata([...data,response.data]);   
        } catch(error){
            console.log("error in fetching data",error);
            
        }
    }

    // delete request

    const deletePost = async (id)=>{
        try{
            await axios.delete(`${Api_url}/${id}`);
            const newData = data.filter((item)=>item.id !== id);
            setdata(newData);
        } catch(error){
            console.log("error in fetching data",error);
            
        }
    }

    // update request

    const updatePost = async (id)=>{
        try{
            const response = await axios.put(`${Api_url}/${id}`,{title:post});
            console.log(response.data);
            
            const newData = data.map((item)=>item.id === id ? response.data : item);
            setdata(newData);
        } catch(error){
            console.log("error in fetching data",error);
            
        }
    }

    useEffect(()=>{
        fetchPost();
    },[])
  return (
    <div>
        <input type="text" value={post} onChange={(e)=>setpost(e.target.value)} />
        <button onClick={submitPost} className='w-24 bg-sky-500/100 text-white rounded-md text-center p-1 m-2 flex justify-center item-center '>Submit</button>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>
                    {item.title}
                    <button onClick={()=>deletePost(item.id) } className='w-24 bg-sky-500/100 text-white rounded-md text-center p-1 m-2 flex justify-center item-center '>Delete</button>
                    <button onClick={()=>updatePost(item.id)} className='w-24 bg-sky-500/100 text-white rounded-md text-center p-1 m-2 flex justify-center item-center '>Update</button>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Axio