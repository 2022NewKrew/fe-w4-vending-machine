import "./App.css";
import React, { useState } from "react";
import ProductView from "./components/ProductView";
import ProcessView from "./components/ProcessView";
import WalletView from "./components/WalletView";

function App() {
  const [totalMoney, setTotalMoney] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);
  return (
    <div className="App">
      <ProductView></ProductView>
      <ProcessView remainingMoney={remainingMoney}></ProcessView>
      <WalletView totalMoney={totalMoney}></WalletView>
    </div>
  );
}

export default App;
