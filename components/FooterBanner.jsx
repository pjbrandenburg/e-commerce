import React from 'react'
import Link from 'next/link'

import { useFor } from '../lib/client'

const FooterBanner = ({ footerBanner: { discount, largetText1, largetText2, saleTime, 
 smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largetText1}</h3>
          <h3>{largetText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(image)}
          className='footer-banner-image'
        />
      </div>
    </div>
  )
}

export default FooterBanner