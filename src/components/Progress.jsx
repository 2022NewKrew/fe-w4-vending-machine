import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { ContextStore, RETURN_CHANGE } from "../store";

const Progress = () => {
  const {
    progressInfo: { inputMoney, actionLog },
    dispatch,
  } = useContext(ContextStore);

  const handleClick = useCallback(() => {
    dispatch({
      actionType: RETURN_CHANGE,
    });
  }, [dispatch]);

  const logs = actionLog.map((log, idx) => <li key={idx}>{log}</li>);

  return (
    <Wrapper>
      <div className="money"> {inputMoney} 원</div>
      <button onClick={handleClick}>반환</button>
      <div className="description">
        <ul>{logs}</ul>
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
