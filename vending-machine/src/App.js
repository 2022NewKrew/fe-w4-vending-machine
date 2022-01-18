import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { walletMoney, productInfo } from './constant/defaultConstant'
import Products from './components/Products'
import Wallet from './components/Wallet'
import Progress from './components/Progress'
import './App.css'

function App() {
  const [waitReturnMoney, setWaitReturnMoney] = useState()
  const [income, setIncome] = useState(3000)
  const [walletMoneyList, setWalletMoneyList] = useState(walletMoney)
  const [logList, setLogList] = useState([])

  // 남은 돈을 가장 큰 돈 단위부터 나눠서 지갑에 저장
  const setDivideRemainMoney = (moneyList, moneyLeft) => {
    let remainMoney = moneyLeft
    return [...moneyList].map(moneyInfo => {
      const share = Math.floor(remainMoney / moneyInfo.price)
      if (share > 0) {
        remainMoney -= share * moneyInfo.price
        return {
          ...moneyInfo,
          count: moneyInfo.count + share,
        }
      }
      return moneyInfo
    })
  }

  // 돈 반환 기능 중단
  const stopWaitReturnMoney = () => {
    clearTimeout(waitReturnMoney)
  }

  // 주어진 금액 만큼 사용 후 반환(자동 돈 반환 기능 중단)
  const returnMoney = cost => {
    stopWaitReturnMoney()
    const remainMoney = income - cost
    setLogList(prev => [...prev, { time: Date.now(), contents: `${remainMoney}원이 반환됨` }])
    setWalletMoneyList(prevMoneyList => {
      return setDivideRemainMoney(prevMoneyList, remainMoney)
    })
    setIncome(0)
  }

  // 5초 후 돈 반환(추가 기능)
  const startWaitReturnMoney = () => {
    stopWaitReturnMoney()
    const timer = setTimeout(() => {
      returnMoney(0)
    }, 5000)
    setWaitReturnMoney(timer)
  }

  // 돈의 변화가 있으면(0원인 경우는 제외) 5초 후 반환 이벤트 시작
  useEffect(() => {
    if (income > 0) startWaitReturnMoney()
  }, [income])

  return (
    <Wrapper>
      <Products
        income={income}
        returnMoney={returnMoney}
        setLogList={setLogList}
        stopWaitReturnMoney={stopWaitReturnMoney}
      />
      <Progress income={income} returnMoney={returnMoney} logList={logList} />
      <Wallet
        walletMoneyList={walletMoneyList}
        setWalletMoneyList={setWalletMoneyList}
        setIncome={setIncome}
        setLogList={setLogList}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: lightyellow;
  display: flex;
`

export default App
