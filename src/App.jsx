import './App.css';
import { getProducts, getSlots, getWalletCounter } from './api';
import { useEffect, useState } from 'react';
import { DELIVERY_TIME } from './utils/constant';
import ItemView from './components/ItemView';
import Progress from './components/Progress';
import Wallet from './components/Wallet';

function App() {
  const [products, setProducts] = useState([]);
  const [slots, setSlots] = useState([]);
  const [moneyInput, setMoneyInput] = useState(0);
  const [progressLogList, setProgressLogList] = useState([]);
  const [walletCounterList, setWalletCounterList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts(setProducts);
    getSlots(setSlots);
    getWalletCounter(setWalletCounterList);
  }, []);

  const reduceStock = async (product) => {
    let newProducts = [...products];

    newProducts.forEach(prod => {
      if (prod.id === product.id) prod.stock--;
    });
    setProducts(newProducts);
    returnWalletCounter(product.price);
  };

  const onClickBuyingItem = (product) => {
    if (product.stock === 0) return;
    if (product.price > moneyInput) return;
    if (loading) return;

    setLoading(true);
    addToProgressLogList(`${product.name} 나오는 중...`);
    setMoneyInput(moneyInput - product.price);

    setTimeout(() => {
      addToProgressLogList(`${product.name} 배송 완료`);
      setLoading(false);
      reduceStock(product);
    }, DELIVERY_TIME);
  };

  const onClickReturn = () => {
    if (moneyInput === 0 || loading) return;

    returnWalletCounter();
    setMoneyInput(0);
  };

  const returnWalletCounter = (price = 0) => {
    let tempMoneyInput = moneyInput - price;
    const coins = [...slots].reverse();
    const newWalletCounterList = [...walletCounterList].reverse();

    coins.forEach((coin, idx) => {
      const quotient = parseInt(tempMoneyInput / coin);

      newWalletCounterList[idx] += quotient;
      tempMoneyInput -= coin * quotient;

      if (quotient > 0) {
        addToProgressLogList(`${coin}원 ${quotient}개 반환.`)
      }
    })

    newWalletCounterList.reverse();
    setWalletCounterList(newWalletCounterList);
    setMoneyInput(0);
  };

  const onClickInsertMoney = (slot, idx) => {
    if (walletCounterList[idx] === 0) return;

    reduceWalletCounter(idx);
    increaseMoneyInput(slot);
    addToProgressLogList(`${slot}원을 추가했습니다.`);
  };

  const reduceWalletCounter = (idx) => {
    const newWalletCounterList = [...walletCounterList];

    newWalletCounterList[idx] -= 1;
    setWalletCounterList(newWalletCounterList)
  };

  const addToProgressLogList = (log) => {
    progressLogList.push(log);
    setProgressLogList(progressLogList);
  };

  const increaseMoneyInput = (increment) => {
    const newMoneyInput = moneyInput + increment;

    setMoneyInput(newMoneyInput);
  };

  return (
    <div id="app">
      <ItemView
        products={products}
        moneyInput={moneyInput}
        onClickBuyingItem={onClickBuyingItem}
      />
      <Progress
        progressLogList={progressLogList}
        moneyInput={moneyInput}
        onClickReturn={onClickReturn}
      />
      <Wallet
        slots={slots}
        onClickInsertMoney={onClickInsertMoney}
        walletCounterList={walletCounterList}
      />
    </div>
  );
}

export default App;
