import React from 'react'

function Navbar() {
  return (
    <div>
      
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