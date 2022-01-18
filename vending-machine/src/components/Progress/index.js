import styled from 'styled-components'
import { useState, useEffect } from 'react'

function Progress({ income, returnMoney, logList }) {
  const onClickReturn = () => {
    if (income > 0) returnMoney(0)
  }

  return (
    <Wrapper>
      <Content>{income}원</Content>
      <Return onClick={onClickReturn}>반환</Return>
      <Log>
        {logList.map(item => (
          <div key={item.time}>{item.contents}</div>
        ))}
      </Log>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 3px solid black;
  padding: 30px;
  min-width: 300px;
  max-width: 300px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  height: 600px;
`

const Content = styled.div`
  border: 2px solid grey;
  width: 100%;
  padding: 10px 30px;
  height: 14px;
  text-align: end;
`

const Return = styled.a`
  border: 2px solid grey;
  width: 100%;
  height: 14px;
  padding: 20px;
  text-align: center;
`

const Log = styled.div`
  border: 2px solid grey;
  width: 100%;
  padding: 10px;
  height: 300px;
  overflow: hidden;
`

export default Progress
