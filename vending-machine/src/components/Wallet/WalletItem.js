import styled from 'styled-components'
import { useState, useEffect } from 'react'

function WalletItem({ item, selectCoin }) {
  const onClickCoin = () => {
    selectCoin(item)
  }

  return (
    <ItemWrapper>
      <CoinButton onClick={() => onClickCoin()}>{item.price}원</CoinButton>
      <CoinCount>{item.count}개</CoinCount>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`

const CoinStyle = `
  width: 60px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CoinButton = styled.a`
  ${CoinStyle}
  margin-right: 10px;
`

const CoinCount = styled.div`
  ${CoinStyle}
`

export default WalletItem
