import { useEffect, createContext, useState, useCallback } from "react";
import { makeDebouncer, fetchJSONData } from "../common/util";

export const ContextStore = createContext();
const debounce = makeDebouncer();

const AppContext = (props) => {
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
    const tmpMoney = Object.keys(insertedMoney).reduce(
      (prevValue, curValue) => {
        prevValue[curValue] = 0;
        return prevValue;
      },
      {}
    );
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
  }, [refundMoney, remainingMoney, refundFlag, setRefundFlag]);

  return (
    <ContextStore.Provider
      value={{
        products,
        setProducts,
        setRefundFlag,
        remainingMoney,
        setRemainingMoney,
        insertedMoney,
        setInsertedMoney,
        totalMoney,
        increaseMoney,
        refundMoney,
        messages,
        pushMessage,
      }}>
      {props.children}
    </ContextStore.Provider>
  );
};

export default AppContext;
