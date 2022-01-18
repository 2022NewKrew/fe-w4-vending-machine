import React from 'react'
import PropTypes from 'prop-types'
import './Investment.css'

const Investment = (props) => {
  return (
    <>
      <li className="investment" onClick={ () => {
        props.clickListener(props.investment);
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
  investment: PropTypes.string.isRequired
}

export default Investment;