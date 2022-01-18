import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { productInfo } from '../../constant/defaultConstant'

function Products({ income, returnMoney, setLogList, stopWaitReturnMoney }) {
  const [productList, setProductList] = useState(productInfo)

  const returnProduct = (price, name) => {
    returnMoney(price)
    setProductList(prev =>
      [...prev].map(item => {
        if (item.name === name)
          return {
            ...item,
            stock: item.stock - 1,
          }
        return item
      }),
    )
  }

  // 물건이 선택 되면 자동 반환 이벤트를 중단하고 물품 구매 로그 출력, 재고 수정, 잔액 반환 작업
  const onClickProduct = (price, name) => {
    setLogList(prev => [...prev, { time: Date.now(), contents: `${name}가 선택 됨` }])
    stopWaitReturnMoney()
    setTimeout(() => returnProduct(price, name), 2000)
  }

  return (
    <Wrapper>
      {productList.map((item, index) => {
        const available = item.stock > 0 && item.price <= income
        return (
          <Content key={item.name}>
            <Product
              available={available}
              onClick={() => {
                if (available) onClickProduct(item.price, item.name)
              }}
            >
              {item.name}
            </Product>
            {item.stock ? item.price : '재고없음'}
          </Content>
        )
      })}
    </Wrapper>
  )
}

const Product = styled.a`
  border: solid ${props => (props.available ? '3px red' : '2px grey')};
  padding: 10px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 20%;
  margin: 5px;
  height: 100px;
`

const Wrapper = styled.div`
  border: 3px solid black;
  padding: 30px;
  min-width: 400px;
  max-width: 400px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  height: 600px;
`

export default Products
