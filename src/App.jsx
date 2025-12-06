import { useState } from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Register from './Pages/Register/Register'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import Checkout from './Components/Checkout/Checkout'
import Search from './Pages/Search/Search'
function App() {

  const [user, setUser]= useState('')
  const [display, setDisplay] = useState(false)
  const [items, setItems] = useState([])
  return (
    <>
      <Navbar user={user} setDisplay = {setDisplay}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register setUser={setUser}/>}/>    
        <Route path='/shop' element={<Shop setItems={setItems}/>} />
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Checkout display = {display} setDisplay={setDisplay} items={items} setItems={setItems}/>
    </>
  )
}

export default App
