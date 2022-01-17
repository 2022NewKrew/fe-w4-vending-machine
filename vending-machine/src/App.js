import './App.css';
import { useState } from 'react';
import Product from './Product';
import Progress from './Progress';
import Wallet from './Wallet';

function App() {
  const [products, setProdcuts] = useState({});
  const [slot, setSlot] = useState([]);
  const [moneyInput, setMoneyInput] = useState([]);

  return (
    <div class="#app">
      <Product />
      <Progress />
      <Wallet />
    </div>
  );
}

export default App;
