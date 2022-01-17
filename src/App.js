import "./App.css";
import React, { useState } from "react";
import ProductView from "./components/ProductView";
import ProcessView from "./components/ProcessView";
import WalletView from "./components/WalletView";

function App() {
  const [totalMoney, setTotalMoney] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);
  const [money, setMoney] = useState({
    10: 0,
    50: 0,
    100: 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
  });
  const [messages, setMessages] = useState([]);

  function addMoney(amount) {
    setTotalMoney((totalMoney) => totalMoney + amount);
    setRemainingMoney((remainingMoney) => remainingMoney + amount);
  }

  function refundMoney() {
    const message = `잔돈 ${remainingMoney}원이 반환되었습니다`;
    setMessages((messages) => messages.concat(message));
    setTotalMoney(0);
    setRemainingMoney(0);
    const keys = Object.keys(money);
    const tmpMoney = {};
    keys.forEach((key) => {
      tmpMoney[key] = 0;
    });
    setMoney(tmpMoney);
  }

  return (
    <div className="App">
      <ProductView></ProductView>
      <ProcessView
        remainingMoney={remainingMoney}
        setMoney={setMoney}
        refundMoney={refundMoney}
        messages={messages}
      ></ProcessView>
      <WalletView
        money={money}
        setMoney={setMoney}
        totalMoney={totalMoney}
        addMoney={addMoney}
        setMessages={setMessages}
      ></WalletView>
    </div>
  );
}

export default App;
