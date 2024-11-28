import React,{useState,useEffect} from 'react'

function Didmount() {
    const [count,setCount ] = useState(0);
    useEffect(()=>{
        console.log('component did mount');
        console.log('initial count:',count);
        
    },[]);

    useEffect(()=>{
        console.log('component did update');
        console.log('updated count:',count); 
        
    },[count]);

    const handleIncrement = ()=>{
        setCount(count+1);
    }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>React Lifecycle with Hooks</h1>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
</div>
  )
}

export default Didmount