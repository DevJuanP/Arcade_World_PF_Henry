import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./views/home/home"
import ShoppingStore from "./views/shoppingStore/shoppingStore"
import './App.css'
import Favoritos from "./components/FavoriteCompras/Favoritos"

function App() {
  return (
    <div>
      {/* <Favoritos/> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/store" element={<ShoppingStore />} />
        <Route path='/favorites' element={<Favoritos/>}></Route>
        {/* <Route path='/about' element={<About/>}></Route>
        <Route path='/library' element={<Library/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  )
  
}

export default App
