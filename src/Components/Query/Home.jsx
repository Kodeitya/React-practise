import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
    const handlenavigate = ()=>{
        navigate('/details?name=aditya&age=20');
    }
  return (
    <div>
        <h1 className='text-2xl'>This is home page</h1>
        <button onClick={handlenavigate}>Go to Details</button>
    </div>
  )
}

export default Home