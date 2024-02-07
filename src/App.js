import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import DynamicSites from './Components/Dynamic/DynamicSites';
import Static from './Components/Static/Static';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/services/*' element={<Services />} >

          <Route path='dynamic' element={<DynamicSites/>}/>
          <Route path='static' element={<Static/>} ></Route>
        </Route>

        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;