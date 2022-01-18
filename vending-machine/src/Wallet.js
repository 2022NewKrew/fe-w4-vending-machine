import './Wallet.css';
function Wallet({ slots }) {
<<<<<<< HEAD
  const slotsList = slots.map((slot, idx) =>
=======
  const slotsList = slots.map(slot =>
>>>>>>> 6d1187d (Feat: 자판기 기본 틀과 props 기본 구성)
    <li className="wallet__slot">{slot}원</li>
  );

  return (
    <div>
      {slotsList}
    </div>
  );
}

<<<<<<< HEAD
export default Wallet;
=======
export default Wallet;
>>>>>>> 6d1187d (Feat: 자판기 기본 틀과 props 기본 구성)
