export default function WalletView({
  totalMoney,
  addMoney,
  money,
  setMoney,
  setMessages,
}) {
  function increaseMoney(key) {
    setMoney({ ...money, [key]: money[key] + 1 });
    addMoney(Number(key));

    const message = `${key}원이 투입되었습니다.`;
    setMessages((messages) => messages.concat(message));
  }

  const moneyMembers = Object.keys(money).map((key) => (
    <div className="money-container" key={key}>
      <button
        className="money-item"
        onClick={() => {
          increaseMoney(key);
        }}
      >
        {key}원
      </button>
      <div className="money-item">{money[key]}개</div>
    </div>
  ));

  return (
    <div className="wallet-view">
      {moneyMembers}
      <div>투입금액: {totalMoney}원</div>
    </div>
  );
}
