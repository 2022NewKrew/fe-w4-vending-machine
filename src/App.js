import "./App.css";
import ProductView from "./components/ProductView";
import ProcessView from "./components/ProcessView";
import WalletView from "./components/WalletView";

function App() {
  return (
    <div className='App'>
      <ProductView></ProductView>
      <ProcessView></ProcessView>
      <WalletView></WalletView>
    </div>
  );
}

export default App;
