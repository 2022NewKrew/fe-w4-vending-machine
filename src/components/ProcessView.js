export default function ProcessView({ refundMoney, remainingMoney, messages }) {
  const messageList = messages.map((message) => <div>{message}</div>);
  return (
    <div className="process-view">
      <div className="remaining-money">{remainingMoney}원</div>
      <button className="refund-button" onClick={refundMoney}>
        반환
      </button>
      <div className="message">{messageList}</div>
    </div>
  );
}
