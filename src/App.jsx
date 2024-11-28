import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Show from './Components/CurrencyConverter/Show'
import SubmitForm from './Components/Form/NewForm'
import NewForm from './Components/Form/NewForm'
// import Home from './Components/Routing/Home/Home'
import Contact from './Components/Routing/Contact/Contact'
import About from './Components/Routing/About/About'
import Nav from './Components/Routing/Navbar/Nav'
import Filter from './Components/Filtering/Filter';
import Axio from './Components/Https/Axio';
import Calci from './Components/Calculator/Calci';
import Dim from './Components/Toggle/Dim';
import To from './Components/To/Todos';
import ShowTodo from './Components/To/ShowTodo';
import Cnt from './Components/To/Cnt';
import Slider from './Components/ImageSlider/Slider';
import Home from './Components/Query/Home';
import Details from './Components/Query/Details';
import Didmount from './Components/Mount/Didmount';
import Cntext from './Components/Context/Cntext';
import LifeCycleDemo from './Components/Class/LifeCycleDemo';
function App() {

  // const router = createBrowserasdRouter(
  //   createRoutesFromElements(/
  //     <><Route path='/' element={<Home />} />
  //     <Route path='contact' element={<Contact />} />
  //     <Route path='about' element={<About />} />
  //     </>
  //   )
  // )

  return (
    // <Show />
    // <SubmitForm />
    // <NewForm/>
    <div>
      {/* <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Router> */}
      {/* <Filter/> */}

      {/* <Axio/> */}

      {/* <Calci/> */}

      {/* <Dim/> */}

      {/* <To/>
      <ShowTodo/> */}

      {/* <Cnt/> */}
      {/* <Slider/> */}

      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router> */}

      {/* <Didmount/> */}
      {/* <Cntext/> */}
      <LifeCycleDemo/>
    </div>
  )
}
  
export default App
