import "./App.css";
import React, { useState, useEffect, createContext, useCallback } from "react";
import ProductView from "./components/ProductView";
import ProcessView from "./components/ProcessView";
import WalletView from "./components/WalletView";
import { makeDebouncer, fetchJSONData } from "./util";

export const ProductContext = createContext(null);
export const MoneyContext = createContext(null);
export const MessageContext = createContext(null);
const debounce = makeDebouncer();

function App() {
  const [totalMoney, setTotalMoney] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);
  const [messages, setMessages] = useState([]);
  const [products, setProducts] = useState([]);
  const [refundFlag, setRefundFlag] = useState(false);
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

  function pushMessage(newMessage) {
    setMessages((messages) => messages.concat(newMessage));
  }

  /* 잔돈 반환 */
  const refundMoney = useCallback(() => {
    if (remainingMoney <= 0) {
      pushMessage("잔돈이 0원이라 반환할 수 없습니다.");
      return;
    }
    pushMessage(`잔돈 ${remainingMoney}원이 반환되었습니다`);
    setRemainingMoney(0);
    setTotalMoney(0);
    // 각 동전 0개로 변환
    const tmpMoney = Object.keys(insertedMoney).reduce((prevValue, curValue) => {
      prevValue[curValue] = 0;
      return prevValue;
    }, {});
    setInsertedMoney(tmpMoney);
  }, [remainingMoney, insertedMoney]);

  useEffect(() => {
    fetchJSONData("http://localhost:3001/products").then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (refundFlag) {
      debounce(() => {
        setRefundFlag(false);
        refundMoney();
      }, 2000);
    }
  }, [refundMoney, remainingMoney, refundFlag]);

  return (
    <ProductContext.Provider value={{ products, setProducts, setRefundFlag }}>
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
