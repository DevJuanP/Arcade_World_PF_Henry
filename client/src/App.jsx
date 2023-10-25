import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/home' element={<Welcome/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/library' element={<Library/>}></Route>
        <Route path='/store' element={<ShoppingStore/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
 
}

export default App
