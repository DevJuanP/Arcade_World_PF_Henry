import { Routes, Route } from 'react-router-dom';
import { About, Home, Library, Store, Detail } from './views/index.js';
import Navbar from './components/navbar/Navbar.jsx';
import Cart from './components/cart/cart.jsx';
import Login from './components/auth/Auth.jsx';

import './App.css'

function App() {

  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/library' element={<Library/>}></Route>
        <Route path='/store' element={<Store/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )

}

export default App