import './App.css';
import { getData } from './api';
import { useEffect, useState } from 'react';
import Product from './Product';
import Progress from './Progress';
import Wallet from './Wallet';

function App() {
  const [products, setProdcuts] = useState([]);
  const [slots, setSlots] = useState([]);
  const [moneyInput, setMoneyInput] = useState(0);
  const fetchInitialData = async (setFunc, URL) => {
    const res = await getData(URL);
<<<<<<< HEAD
    await setFunc(res);
=======
    console.log(res);
    await setFunc(res);
    console.log(products, slots);
>>>>>>> 6d1187d (Feat: 자판기 기본 틀과 props 기본 구성)
  }

  useEffect(() => {
    fetchInitialData(setProdcuts, '/products');
  }, []);

  useEffect(() => {
    fetchInitialData(setSlots, '/slots');
  }, []);

  return (
    <div id="app">
      <Product products={products} moneyInput={moneyInput} />
      <Progress moneyInput={moneyInput} />
      <Wallet slots={slots} />
    </div>
  );
}

export default App;
