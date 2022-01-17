export default function ProcessView({ refundMoney, remainingMoney }) {
  return (
    <div className="process-view">
      <div className="remaining-money">{remainingMoney}</div>
      <button className="refund-button" onClick={refundMoney}>
        반환
      </button>
      <div className="message"></div>
    </div>
  );
}
