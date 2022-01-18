import { useContext } from "react";
import { MoneyContext, MessageContext } from "../App.js";

export default function ProcessView({}) {
  const { remainingMoney, refundMoney } = useContext(MoneyContext);
  const { messages } = useContext(MessageContext);

  const messageList = messages.map((message, index) => (
    <div key={index}>{message}</div>
  ));

  return (
    <div className="process-view">
      <div className="remaining-money">남은금액: {remainingMoney}원</div>
      <button className="refund-button" onClick={refundMoney}>
        반환
      </button>
      <div className="message-container">{messageList}</div>
    </div>
  );
}
