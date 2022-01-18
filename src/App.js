import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import ProductView from "./components/ProductView";
import ProcessView from "./components/ProcessView";
import WalletView from "./components/WalletView";

export const ProductContext = createContext(null);
export const MoneyContext = createContext(null);
export const MessageContext = createContext(null);

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
    <ProductContext.Provider value={{ products, setProducts }}>
      <MoneyContext.Provider
        value={{
          remainingMoney,
          setRemainingMoney,
          insertedMoney,
          setInsertedMoney,
          totalMoney,
          increaseMoney,
          refundMoney,
        }}
      >
        <MessageContext.Provider value={{ messages, setMessages }}>
          <div className="App">
            <ProductView></ProductView>
            <ProcessView></ProcessView>
            <WalletView></WalletView>
          </div>
        </MessageContext.Provider>
      </MoneyContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
