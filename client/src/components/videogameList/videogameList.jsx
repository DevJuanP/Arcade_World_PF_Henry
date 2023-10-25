import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideogameCard from "../../components/videogameCard/videogameCard"

const VideogameList = ({title, data}) => {
 
  const navigate = useNavigate();
 
  return ( 
    <div>
        {title && <h2>{title}</h2>}
        <div className='list-container'>
            {data && data.map(item => (
            <VideogameCard data={item}/>
            ))}
        </div>
    </div>
   );
}
 
export default VideogameList;