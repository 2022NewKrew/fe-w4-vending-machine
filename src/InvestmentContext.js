import React, { useReducer } from 'react'

const initialState = {
  investment: 0,
  wallet: {
    '10000': 1,
    '5000': 3,
    '1000': 1,
    '500': 3,
    '100': 5,
    '50': 2,
    '10': 5
  },
  log: ''
}

export const ACTION_TYPE = {
  PURCHASE_PRODUCT: 'PURCHASE_PRODUCT',
  ADD_INVESTMENT: 'ADD_INVESTMENT',
  RETURN_EXCHANGE: 'RETURN_EXCHANGE'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.PURCHASE_PRODUCT:
      return {
        ...state,
        investment: state.investment - action.price,
        log: state.log + `\n${ action.productName }가 구매됨`
      }
    
    case ACTION_TYPE.ADD_INVESTMENT:
      return {
        ...state,
        investment: state.investment + action.amount,
        wallet: {
          ...state.wallet,
          [action.amount]: state.wallet[action.amount] - 1
        }
      }
      
    case ACTION_TYPE.RETURN_EXCHANGE:
      Object.keys(state.wallet)
        .forEach(amount => {
          if (state.investment >= amount) {
            const count = Math.floor(state.investment / amount)
            state.wallet[amount] += count
            state.investment -= count * amount
          }
        })
      
      return {
        ...state,
        log: state.log + `\n잔돈 ${ state.investment }원 반환`
      }
    
    
    default:
      return state
  }
}

export const InvestmentContext = React.createContext(null)

const InvestmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <InvestmentContext.Provider value={ { state, dispatch } }>
      { children }
    </InvestmentContext.Provider>
  )
}

export default InvestmentContextProvider