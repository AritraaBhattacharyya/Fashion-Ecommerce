import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className='descriptionbox-nav-box fade'>
                Reviews (122)
            </div>
        </div>
        <div className='descriptionbox-description'>
            <p>
            An ecommerce platform is the content management system (CMS) and commerce engine websites use to manage catalogued products, register purchases and manage a users relationship with an online retailer.
            </p>   
            <p>
            An ecommerce platform is the content management system (CMS) and commerce engine websites use to manage catalogued products, register purchases and manage a users relationship with an online retailer.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox