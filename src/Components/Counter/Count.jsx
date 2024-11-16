import {useState} from 'react'

function Count() {
    const [count,setnewCount] = useState(0);
    const handleIncrement = ()=>{
        setnewCount(count+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <br/><button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Count