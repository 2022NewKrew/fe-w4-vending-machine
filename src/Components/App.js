import React from 'react'
import ProductSelectionView from './Product/ProductSelectionView'
import InvestmentSelectionView from './Investment/InvestmentSelectionView'
import './App.css'
import InvestmentContextProvider from '../Context/InvestmentContext'
import ProgressView from './Progress/ProgressView'

const App = () => {
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