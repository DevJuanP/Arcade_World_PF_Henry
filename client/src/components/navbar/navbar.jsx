import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(null);

  const handleVideogameByName = async (e) => {

  };

  return (
    <div className={`navbar-wrapper`}>
      <div className={`navbar-container`}>
        <div>
          <span>LOGO</span>
        </div>
          <div className='navbar-buttons-container'>
            <div className='searchbar-cart-container'>
              {/* searchBar */}
              <div className='navbar-input d-flex align-items-center position-relative'>
                <input type="text" placeholder='Enter videogame...' className={`position-relative`} onChange={(e) => setInput(e.target.value)} value={input} style={{ backgroundColor: "white" }}
                  onKeyDown={(e) => e.key === "Enter" && handleVideogameByName()} />
                <button className="search-button" onClick={handleVideogameByName}>Buscar</button>
              </div>
              
              {/* CARRITO */}
              <div className='navbar-icons'>
                <div>
                  <img src="/cart.svg" style={{ cursor: "pointer" }} alt="abc" onClick={() => navigate("/")} /> {/* imagen de un carrito */}
                </div>

                {/* SIGN UP */}
                <div>
                  <button className='navbar-buttons'onClick={() => navigate("/")}>Sign up</button>
                </div> 

                {/* SIGN IN */}
                <div>
                  <button className='navbar-buttons'onClick={() => navigate("/")}>Sign in</button>
                </div>
              </div>
            </div>
            <div className='searchbar-buttons-container'>
              {/* INICIO */}
              <div>
                <button className='navbar-buttons' onClick={() => navigate("/home")}>Inicio</button>
              </div>

              {/* TIENDA */}
              <div>
                <button className='navbar-buttons' onClick={() => navigate("/store")}>Tienda</button>
              </div>

              {/* Library */}
              <div>
                <button className='navbar-buttons' onClick={() => navigate("/")}>Libary</button>
              </div>

              {/* ABOUT */}
              <div>
                <button className='navbar-buttons' onClick={() => navigate("/")}>About</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )}

export default NavBar;