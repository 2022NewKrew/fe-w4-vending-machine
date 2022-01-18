import React, { useState, useContext } from 'react'
import Product from './Product'
import './ProductSelectionView.css'
import { InvestmentContext, ACTION_TYPE } from './InvestmentContext'
import { useDebouncing } from './hooks/useDebouncing'

const initialProductList = [
  {
    title: '콜라',
    price: 1000,
    count: 3
  },
  {
    title: '사이다',
    price: 500,
    count: 5
  },
  {
    title: '파인애플맛 환타',
    price: 2500,
    count: 3
  },
  {
    title: '포도맛 환타',
    price: 3500,
    count: 9
  },
  {
    title: '레몬에이드',
    price: 100,
    count: 1
  },
  {
    title: '봉봉',
    price: 550,
    count: 6
  },
  {
    title: '코코아주스',
    price: 970,
    count: 1
  },
  {
    title: '콜라제로',
    price: 2220,
    count: 9
  },
  {
    title: '파워에이드',
    price: 5000,
    count: 1
  },
  {
    title: '초코우유',
    price: 3700,
    count: 6
  },
  {
    title: '바나나우유',
    price: 1800,
    count: 5
  },
  {
    title: '딸기우유',
    price: 99990,
    count: 999
  }
]

const ProductSelectionView = (props) => {
  const [productList, setProductList] = useState(initialProductList)
  const { state: contextState, dispatch } = useContext(InvestmentContext)
  const debounceDispatch = useDebouncing(1000, dispatch)
  
  const productClickListener = (idx) => {
    const { title, price, count } = productList[idx]
    
    if (contextState.investment - price >= 0 && count > 0) {
      dispatch({
        type: ACTION_TYPE.PURCHASE_PRODUCT,
        price: price,
        productName: title
      })
      productList[idx].count -= 1
      setProductList([...productList])
  
      debounceDispatch({
        type: ACTION_TYPE.RETURN_EXCHANGE
      })
    }
  }
  
  return (
    <div className="product-selection">
      {
        productList.map((product, idx) => (
          <Product
            key={ idx }
            idx={ idx }
            title={ product.title }
            price={ product.price }
            available={ contextState.investment >= product.price && product.count > 0 }
            clickListener={ productClickListener } />)
        )
      }
    </div>
  )
}

export default ProductSelectionView