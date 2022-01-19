import React, { useContext } from "react";
import styled from "styled-components";
import { ContextStore, INSERT_COIN } from "../store";

const Wallet = () => {
  const {
    progressInfo: { currentMoney },
    dispatch,
  } = useContext(ContextStore);

  const handleClick = (selectUnit, index) => {
    dispatch({
      actionType: INSERT_COIN,
      payload: { selectUnit, index },
    });
  };

  const totalMoney = currentMoney.reduce((acc, cur) => {
    return acc + cur.unit * cur.count;
  }, 0);

  const eachUnitCount = currentMoney.map(({ unit, count }, index) => (
    <div key={unit} className="box">
      <button
        disabled={count <= 0}
        onClick={() => {
          handleClick(unit, index);
        }}
      >
        {unit}원
      </button>
      <span>{count}개</span>
    </div>
  ));

  return (
    <Wrapper>
      {eachUnitCount}
      <div className="box">
        <span className="total">{totalMoney}원</span>
      </div>
    </Wrapper>
  );
};

export default Wallet;

const Wrapper = styled.section`
  border: 5px solid gray;
  padding: 10px;
  margin-left: 50px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .box {
    display: flex;
    justify-content: space-between;
    * {
      background-color: transparent;
      flex: 1;
      text-align: center;
      border: 3px solid gray;
      border-radius: 10px;
      padding: 20px 10px;
      margin: 5px;
      font-size: 18px;
    }
  }
`;
