import {useState,useCallback,useEffect,useRef} from 'react'
// import '../../index.css'
function Password() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [hasNumber, setHasNumber] = useState(false)
  const [hascharacter, setHasCharacter] = useState(false)
  const passGen = useCallback(() => { 
    let generatedpassword = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let sym = '!@#$%^&*()_+';
    if(hasNumber) str += num;
    if(hascharacter) str += sym;

    for(let i = 0; i < length; i++){
      generatedpassword += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(generatedpassword);
  }, [length,hasNumber,hascharacter,setPassword]);

  useEffect(()=>{
    passGen();
  },[length,hasNumber,hascharacter,passGen]);

  const ref = useRef(null);

  const copytoclipboard = () => {
    ref.current.select();
    window.navigator.clipboard.writeText(ref.current.value);
    alert('Password copied to clipboard');
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" ref={ref} value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }} readOnly   className="outline-none w-full py-1 px-3" />
        <button onClick={()=>{
          copytoclipboard();
        }}  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex  gap-x-2'>
          <label htmlFor='password-length' className='text-white'>Password: </label>
          <input type='range' id='password-length' value={length} min='4' max='90' onChange={(e)=>{     
            setLength(e.target.value);
          }} className='cursor-pointer' />
        </div>

        <div className="flex items-center gap-x-1" >
        <label  className='text-white'>Numbers: </label>
          <input type='checkbox' id='has-number' defaultChecked={hasNumber} onChange={()=>{
            setHasNumber((prev)=>!prev)
          } }/>
        </div>
        <div className="flex items-center gap-x-1">
          <label  className='text-white'>Special Characters: </label>
          <input type='checkbox' className='text-white' defaultChecked={hascharacter} onChange={()=>{setHasCharacter((prev)=>!prev)}} />
        </div>

    </div>
  )
}

export default Password