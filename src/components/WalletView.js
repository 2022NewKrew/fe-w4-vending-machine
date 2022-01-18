import { useContext } from "react";
import { MoneyContext, MessageContext } from "../App.js";

export default function WalletView() {
  const { totalMoney, increaseMoney, insertedMoney, setInsertedMoney } =
    useContext(MoneyContext);
  const { setMessages } = useContext(MessageContext);
  function insertMoney(key) {
    setInsertedMoney({ ...insertedMoney, [key]: insertedMoney[key] + 1 });
    increaseMoney(Number(key));

    const message = `${key}원이 투입되었습니다.`;
    setMessages((messages) => messages.concat(message));
  }

  const moneyContainers = Object.entries(insertedMoney).map(([key, value]) => (
    <div className="money-container" key={key}>
      <button
        className="money-item"
        onClick={() => {
          insertMoney(key);
        }}
      >
        {key}원
      </button>
      <div className="money-item">{value}개</div>
    </div>
  ));

  return (
    <div className="wallet-view">
      {moneyContainers}
      <div>투입금액: {totalMoney}원</div>
    </div>
  );
}
