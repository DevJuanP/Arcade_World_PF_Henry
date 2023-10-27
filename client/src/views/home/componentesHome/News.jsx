// import React from 'react'
import './Style/NewsStyle.css'
function News({name,price,image}) {
  
  return (
    <div className='section_news'>
      <div className='card'>
      <img className='image' src={image} alt=""  />
      <h5 className='title' >{name}</h5>
      <p className='price'>{price}</p>
      </div>
      
    </div>
  )
}

export default News