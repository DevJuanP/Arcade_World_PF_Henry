// import React from 'react'
import './Style/RatingStyle.css'

function BestRating({name,price,image}) {
 
  return (
    <div>
      <div className='cardss'>
 <img className='imagess' src={image} alt="" />
      <h5 className='titless'>{name}</h5>
      <p className='pricess'>{price}</p>
      </div>
    </div>
  )
}

export default BestRating