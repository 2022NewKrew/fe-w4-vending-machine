import React from 'react'
import PropTypes from 'prop-types'

export const Investment = (props) => {
  return (
    <>
      <li onClick={ () => {
        props.clickListener(props.investment)
      } }>
        <div className="investment-amount">{ `${ props.investment }원` }</div>
        <div className="investment-count">{ `${ props.count }개` }</div>
      </li>
    </>
  )
}

Investment.propTypes = {
  clickListener: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  investment: PropTypes.number.isRequired
}