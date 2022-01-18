import React, { useContext } from 'react'
import Investment from './Investment'
import { ACTION_TYPE, InvestmentContext } from '../../Context/InvestmentContext'
import './InvestmentSelectionView.css'

const InvestmentSelectionView = () => {
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
      <div className="total-amount">
        {
          Object.entries(contextState.wallet)
            .reduce((accumulator, [amount, count]) =>
                accumulator + Number.parseInt(amount) * count
              , 0)
          + '원'
        }
      </div>
    </div>
  )
}

export default InvestmentSelectionView;