import React from 'react'
import styles from './Product.css'


export const Product = (props) => {
  return (
    <li className={ props.available ? 'purchase-available' : '' }
        onClick={ props.clickListener }>
      <div className="product-name">{ props.name }</div>
      <div className="product-price">{ props.price }</div>
    </li>
  )
}