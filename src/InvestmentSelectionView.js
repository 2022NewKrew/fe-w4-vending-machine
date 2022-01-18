import React, { useContext, useState } from 'react'
import Investment from './Investment'
import { ACTION_TYPE, InvestmentContext } from './InvestmentContext'
import styles from './InvestmentSelectionView.css'

export const InvestmentSelectionView = () => {
  const { state: contextState, dispatch } = useContext(InvestmentContext)
  
  const investmentClickListener = (amount) => {
    if (contextState.wallet[amount]) {
      dispatch({
        type: ACTION_TYPE.ADD_INVESTMENT,
        amount: Number.parseInt(amount)
      })
    }
  }
  
  return (
    <div className="investment-selection">
      {
        Object.entries(contextState.wallet)
          .map(([amount, count], idx) => (
            <Investment
              key={ idx }
              investment={ amount }
              count={ count }
              clickListener={ investmentClickListener } />))
      }
      <div>{ contextState.investment }</div>
    </div>
  )
}