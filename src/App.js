import "./App.css";
import React, { useState, useEffect } from "react";
import ProductView from "./components/ProductView";
import ProcessView from "./components/ProcessView";
import WalletView from "./components/WalletView";

function App() {
  const [totalMoney, setTotalMoney] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);
  const [messages, setMessages] = useState([]);
  const [products, setProducts] = useState([]);
  const [insertedMoney, setInsertedMoney] = useState({
    10: 0,
    50: 0,
    100: 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
  });

  /* 총액과 잔액에 amount 더하기  */
  function increaseMoney(amount) {
    setTotalMoney((totalMoney) => totalMoney + amount);
    setRemainingMoney((remainingMoney) => remainingMoney + amount);
  }

  /* 잔돈 반환 */
  function refundMoney() {
    if (remainingMoney <= 0) {
      const message = "잔돈이 0원이라 반환할 수 없습니다.";
      setMessages((messages) => messages.concat(message));
      return;
    }
    const message = `잔돈 ${remainingMoney}원이 반환되었습니다`;
    setMessages((messages) => messages.concat(message));
    setTotalMoney(0);
    setRemainingMoney(0);
    // 각 동전 0원으로 변환
    const keys = Object.keys(insertedMoney);
    const tmpMoney = {};
    keys.forEach((key) => {
      tmpMoney[key] = 0;
    });
    setInsertedMoney(tmpMoney);
  }

  useEffect(() => {
    async function fetchData() {
      const file = await fetch("http://localhost:3001/products");
      const productsJson = await file.json();
      setProducts(productsJson);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <ProductView
        remainingMoney={remainingMoney}
        setRemainingMoney={setRemainingMoney}
        products={products}
        setProducts={setProducts}
        setMessages={setMessages}
      ></ProductView>
      <ProcessView
        remainingMoney={remainingMoney}
        setInsertedMoney={setInsertedMoney}
        refundMoney={refundMoney}
        messages={messages}
      ></ProcessView>
      <WalletView
        insertedMoney={insertedMoney}
        setInsertedMoney={setInsertedMoney}
        totalMoney={totalMoney}
        increaseMoney={increaseMoney}
        setMessages={setMessages}
      ></WalletView>
    </div>
  );
}

export default App;
