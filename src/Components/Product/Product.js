import React from 'react'
import styles from './Product.css'
import PropTypes from 'prop-types'

const Product = (props) => {
  return (
    <li className={ props.available ? 'purchase-available' : '' }
        onClick={ () => {
          props.clickListener(props.idx);
        } }>
      <div className="product-name">{ props.title }</div>
      <div className="product-price">{ props.price }</div>
    </li>
  )
}

Product.propTypes = {
  available: PropTypes.bool.isRequired,
  clickListener: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired
}

export default Product