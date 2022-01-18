import React, { useState } from 'react'
import ProductSelectionView from './Product/ProductSelectionView'
import { InvestmentSelectionView } from './Investment/InvestmentSelectionView'
import styles from './App.css'
import InvestmentContextProvider from '../Context/InvestmentContext'
import { ProgressView } from './Progress/ProgressView'

const App = () => {
  
  const [investment, setInvestment] = useState(0)
  
  return (
    <>
      <div className="app">
        <InvestmentContextProvider>
          <ProductSelectionView />
          <ProgressView/>
          <InvestmentSelectionView />
        </InvestmentContextProvider>
      </div>
    </>
  )
}

export default App