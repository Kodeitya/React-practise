import React, { useState } from 'react'

function Dim() {
    const [dark, setDark] = useState(false);
    const [text, setText] = useState(false);

    const handleToggle = () => {
        setDark((prev) => !prev);
        setText((prev) => !prev);
    }
    return (
        <div className={dark?'bg-black w-full h-full':'bg-white w-full h-full'}>

            <button onClick={handleToggle} className='w-24 bg-sky-500/100 text-white rounded-md text-center p-1 m-2 flex justify-center item-center '>
            {dark ? 'Light' : 'Dark'}</button><br />
            <h1 className={!text ? "text-black text-4xl" : "text-white text-4xl"}>{text ? "This is Dark" : "This is Light"}</h1>

        </div>
    )
}

export default Dim