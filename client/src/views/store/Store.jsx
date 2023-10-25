import React from 'react';
import NavBar from '../../components/navbar/navbar';
import AllVideogames from '../../components/allVideogames/allVideogames';

const shoppingStore = () => {
  return (
    <div className='home-wrapper'>
      <NavBar />
      <AllVideogames />
    </div>
  );
}

export default shoppingStore;