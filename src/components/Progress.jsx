import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const Progress = () => {
  const [money, setMoney] = useState(0);

  return (
    <Wrapper>
      <div className="money">{money} 원</div>
      <button>반환</button>
      <div className="description">
        <ul>
          <li>500원 투입됬음</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Progress;

const Wrapper = styled.section`
  border: 10px ridge red;
  padding: 30px 30px 100px 30px;
  width: 300px;
  display: grid;
  grid-template-rows: 68px 68px 300px;
  row-gap: 50px;
  .money {
    border: 3px solid gray;
    font-size: 20px;
    text-align: end;
    line-height: 40px;
    padding: 10px;
  }
  button {
    width: 100%;
    border: 3px solid gray;
    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
  }
  .description {
    border: 3px solid gray;
    overflow: hidden;
    position: relative;
    ul {
      text-align: center;
      height: 89%;
      z-index: 1;
      overflow: scroll;
    }
  }
`;
