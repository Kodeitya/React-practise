import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,setValue} from '../../features/todo/countSlice'

function Cnt() {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();
  return (
    <div>

        <h1 className='text-2xl'>Count: {count}</h1>
        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            onClick={()=>dispatch(increment())}>increment</button> <br /><br />
        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"        
            onClick={()=>dispatch(decrement())}>decrement</button> <br /><br />
        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"    
            onClick={()=>dispatch(setValue(0))}>reset</button> <br /><br />
    </div>
  )
}

export default Cnt