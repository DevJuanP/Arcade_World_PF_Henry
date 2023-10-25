import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideogameCard = ({data: { imagen, nombre }}) => {
 
  const navigate = useNavigate();
 
  return ( 
    <div className='videogame-card'>
      <div className='videogame-card-image'>
        <img src={imagen} alt="abc" onClick={()=>navigate(`/home`)} width={400} height={296.15}/>
      </div>
      <div className='videogame-card-details'>
        <div className='videogame-card-title'>
          <span>{nombre}</span>
        </div>
      </div>
    </div>
   );
}
 
export default VideogameCard;