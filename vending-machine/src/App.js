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
    setFunc(res);
  }

  useEffect(() => {
    fetchInitialData(setProdcuts, '/products');
    fetchInitialData(setSlots, '/slots');
  }, []);

  useEffect(() => {

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
