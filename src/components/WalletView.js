import { useState } from "react";

export default function WalletView({ totalMoney, addMoney, money, setMoney }) {
  function increaseMoney(key) {
    setMoney({ ...money, [key]: money[key] + 1 });
    addMoney(Number(key));
  }

  return (
    <div className="wallet-view">
      {Object.keys(money).map((key) => (
        <div className="money-container" key={key}>
          <div
            className="money-item"
            onClick={() => {
              increaseMoney(key);
            }}
          >
            {key}원
          </div>
          <div className="money-item">{money[key]}개</div>
        </div>
      ))}
      <div>{totalMoney}원</div>
    </div>
  );
}
