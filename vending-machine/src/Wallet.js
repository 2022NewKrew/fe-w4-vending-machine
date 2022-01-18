import './Wallet.css';
function Wallet({ slots }) {
  const slotsList = slots.map((slot, idx) =>
    <li className="wallet__slot" key={idx}>{slot}원</li>
  );

  return (
    <div>
      {slotsList}
    </div>
  );
}

export default Wallet;
