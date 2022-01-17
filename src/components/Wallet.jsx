import React, { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import data from "../data/data.json";

const Wallet = () => {
  const [current, setCurrent] = useState(data["current"]);
  const [inputMoney, setInputMoney] = useState({});
  const [total, setTotal] = useState(0);

  const handleClick = useCallback(
    (selectUnit) => {
      const newCurrent = current.map(({ unit, count }) => ({
        unit,
        count: unit === selectUnit ? count - 1 : count,
      }));
      setCurrent(newCurrent);
      setTotal((prev) => prev + selectUnit);
    },
    [current]
  );

  return (
    <Wrapper>
      {current.map(({ unit, count }) => (
        <div key={unit} className="box">
          <button
            disabled={!count}
            onClick={() => {
              handleClick(unit);
            }}
          >
            {unit}원
          </button>
          <span>{count}개</span>
        </div>
      ))}

      <div className="box">
        <span className="total">{total}원</span>
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
