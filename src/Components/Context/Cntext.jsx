import React,{useState,createContext,useContext} from 'react'

const UserContext = createContext();

function Cntext() {
    const [user,setuser] = useState("aditya");
    
  return (
    <div>
        <UserContext.Provider value={user}>
            <h1>{`hello ${user}`}</h1>
            <Cntext2/>
        </UserContext.Provider>
    </div>
  )
}

function Cntext2() {
   
  return (
    <div>
        <h1>hello from context 2</h1>
        <Cntext3/>
    </div>
  )
}

function Cntext3() {
    const user = useContext(UserContext);
  return (
    <div>
        <h1>{`hello from context 3 ${user}`}</h1>
    </div>
  )
}

export default Cntext