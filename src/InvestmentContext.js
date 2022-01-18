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
        log: state.log + `${ action.productName }이(가) 구매됨\n`
      }
    
    case ACTION_TYPE.ADD_INVESTMENT:
      return {
        ...state,
        investment: state.investment + action.amount,
        wallet: {
          ...state.wallet,
          [action.amount]: state.wallet[action.amount] - 1
        },
        log: state.log + `${action.amount}원이 투입됨\n`
      }
    
    case ACTION_TYPE.RETURN_EXCHANGE:
      const wallet = { ...state.wallet }
      let investment = state.investment
      
      Object.keys(wallet)
        .sort((amount1, amount2) => Number.parseInt(amount1) > Number.parseInt(amount2) ? -1 : 1)
        .forEach(amount => {
          if (investment >= amount) {
            const count = Math.floor(investment / amount)
            wallet[amount] += count
            investment -= count * amount
          }
        })
      
      return {
        ...state,
        wallet,
        investment,
        log: state.log + `잔돈 ${ state.investment }원 반환\n`
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