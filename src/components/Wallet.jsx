import './Wallet.css';
import { decimalSeperator } from '../utils/helper';
function Wallet({
  slots,
  walletCounterList,
  onClickInsertMoney,
}) {
  const slotsList = slots.map((slot, idx) =>
    <div className="wallet__wrapper" key={idx}>
      <li className="wallet__slot" onClick={() => onClickInsertMoney(slot, idx)}>
        {decimalSeperator(slot)}원
      </li>
      <li className="wallet__counter">
        {walletCounterList[idx]}개
      </li>
    </div>
  );

  return (
    <div className="wallet__list">
      {slotsList}
    </div>
  );
}

export default Wallet;
