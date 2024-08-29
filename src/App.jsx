import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import Property from './Pages/Property'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/property" element = {<Property/>}/>
      
    </Routes>
    

    
     

    </>
  )
}

export default App
