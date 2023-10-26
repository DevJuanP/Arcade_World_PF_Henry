import { Link, NavLink, useLocation } from 'react-router-dom';
import Search from '../search/Search';
import style from './Navbar.module.css'

function Navbar() {
  const location = useLocation();
  
  return (
    <div>
      {location.pathname !== '/login' && (
        <>
          <div className={style.butn}>
           <div><h2>🛒</h2></div>
            <Link to= '/login'><button >Log In</button></Link>
          </div>
          <Search/>
        </>
      )}
      <div className={style.navContent}>
        <NavLink className={style.homeForm} to= '/'>Home</NavLink>
        <NavLink className={style.homeForm} to= '/store'>Store</NavLink>
        <NavLink className={style.homeForm} to= '/library'>Library</NavLink>
        <NavLink className={style.homeForm} to= '/about'>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar;