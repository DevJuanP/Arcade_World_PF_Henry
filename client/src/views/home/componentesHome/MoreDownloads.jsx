// import React from 'react'
import './Style/DownloadStyle.css' 

function MoreDownloads({name,price,image}) {
  
  return (
    <div className="section_downloads">
      <div className='cards'>
       <img className='images' src={image} alt="" />
      <h5 className='titles'>{name}</h5>
      <p className='prices'>{price}</p>
      </div>
    </div>
  )
}

export default MoreDownloads