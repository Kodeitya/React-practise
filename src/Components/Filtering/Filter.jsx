import React, { useState } from 'react'

function Filter() {
    const arr = ['animal','april','apple','zebra','boy','bat','cat','rat'];
    const [obj, setObj] = useState([...arr]);
    const [searchObj, setSearchObj] = useState('');
    function handleAsc(){
        const result = [...arr];
        setObj(result.sort());
    }

    function handleDes(){
        const result = [...arr];
        setObj(result.sort().reverse());
    }

    function Search(){
        const result = arr.filter((item)=>item.includes(searchObj));
        console.log(result);
        
        {result.length > 0 ? setObj(result) : obj};
    }

return (
    <div>
            <button onClick={handleAsc} className='w-24 bg-sky-500/100 text-white rounded-md text-center p-1 m-2 flex justify-center item-center '>Ascending</button>
            <button onClick={handleDes} className='w-24 bg-sky-500/100 text-white rounded-md text-center p-1 m-2 flex justify-center item-center '>Descending</button><br />
            <span className='text-1xl'>Search: </span> <input type="text" value={searchObj} onChange={(e) => setSearchObj(e.target.value)} className='w-24 border-black ' placeholder='search'/>
            {searchObj && <button onClick={Search}>Search</button>}
            <br />
           <p className='text-4xl'>Items are: </p>
            <ul>
                    {obj.map((item,index)=>(
                            <li key={index} className='text-2xl'>{item}</li>
                    ))}
            </ul>
    </div>
)
}

export default Filter