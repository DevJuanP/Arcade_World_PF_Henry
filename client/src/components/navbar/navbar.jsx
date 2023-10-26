import { Link, NavLink } from 'react-router-dom';
import Search from '../search/Search';
import style from './Navbar.module.css'

function Navbar() {

  
  return (
    <div>
      <div className={style.butn}>
        <Link to= '/auth'><button >Log In</button></Link>
      </div>
       <Search/>

      <div className={style.navContent}>
        <NavLink className={style.homeForm} to= '/'>Inicio</NavLink>
        <NavLink className={style.homeForm} to= '/store'>Store</NavLink>
        <NavLink className={style.homeForm} to= '/library'>Library</NavLink>
        <NavLink className={style.homeForm} to= '/about'>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar;