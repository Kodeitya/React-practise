import React from 'react'
import { useSearchParams } from 'react-router-dom'
function Details() {
    const [searchparams] = useSearchParams();
    const name = searchparams.get('name');
    const age = searchparams.get('age');
  return (
    <div>
        <h1 className='text-2xl'>This is Details Page</h1>
        <h1>Details are:</h1>
        <p>name: {name}</p>
        <p>age: {age}</p>
    </div>
  )
}

export default Details