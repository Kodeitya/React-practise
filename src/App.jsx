import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './index.css'
import To from './Components/Todo/To'
import List from './Components/NewTodo/List'
import Product from './Components/Product/Product'
import Counter from './Components/Counter/Count'
import Password from './Components/PasswordGen/Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <List/> */}
      {/* <Product/>
      <Counter/> */}
      <Password/>
    </>
  )
}

export default App
