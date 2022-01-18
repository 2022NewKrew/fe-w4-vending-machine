import React, { useState } from 'react'
import ProductSelectionView from './ProductSelectionView'
import { InvestmentSelectionView } from './InvestmentSelectionView'
import styles from './App.css'
import InvestmentContextProvider from './InvestmentContext'
import { ProgressView } from './ProgressView'

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