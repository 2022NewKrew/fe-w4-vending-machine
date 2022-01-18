import styled from 'styled-components'
import { useState, useEffect } from 'react'
import WalletItem from './WalletItem'

function Wallet({ walletMoneyList, setWalletMoneyList, setIncome, setLogList }) {
  const totalMoney = walletMoneyList
    .map(moneyInfo => moneyInfo.price * moneyInfo.count)
    .reduce((a, b) => a + b, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // 금액을 선택하면(지갑에 돈이 있을 경우) 해당 금액을 진행화면에 추가 및 지갑에서 금액 제거
  const selectCoin = item => {
    if (item.count === 0) {
      return
    }
    setIncome(prev => prev + item.price)
    setWalletMoneyList(prev =>
      [...prev].map((moneyInfo, i) => {
        if (moneyInfo === item) {
          return {
            ...moneyInfo,
            count: moneyInfo.count - 1,
          }
        }
        return moneyInfo
      }),
    )
    setLogList(prev => [...prev, { time: Date.now(), contents: `${item.price}원이 투입됐음.` }])
  }

  return (
    <WalletWrapper>
      {[...walletMoneyList].reverse().map((item, index) => (
        <WalletItem key={item.price} item={item} itemIndex={index} selectCoin={selectCoin} />
      ))}
      <TotalMoney>{totalMoney}원</TotalMoney>
    </WalletWrapper>
  )
}

const WalletWrapper = styled.div`
  margin-left: 10px;
  border: 1px solid black;
  padding: 20px;
  font-size: 14px;
  min-width: 154px;
`

const TotalMoney = styled.div`
  margin: 10px;
  width: 130px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid black;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Wallet
