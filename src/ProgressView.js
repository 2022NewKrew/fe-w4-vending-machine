import React, { useContext } from 'react'
import './ProgressView.css'
import { ACTION_TYPE, InvestmentContext } from './InvestmentContext'

export const ProgressView = () => {
  const { state: contextState, dispatch } = useContext(InvestmentContext)
  const exchangeClickListener = () => {
    dispatch({
      type: ACTION_TYPE.RETURN_EXCHANGE
    })
  }
  
  return (
    <div className="progress">
      <div className="inserted-investment">
        <span className="inserted-investment-text">{ contextState.investment }</span>
      </div>
      <div className="exchange" onClick={ exchangeClickListener }>반환</div>
      <div className="log-container">
        { contextState.log }
      </div>
    </div>
  )
}