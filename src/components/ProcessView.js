import { useContext, useRef } from "react";
import { ContextStore } from "../context/context";
import styled from "styled-components";
import useScrollToBottom from "../common/scroll";
const MessageContainer = styled.div`
  height: 300px;
  width: 100%;
  border: 1px solid black;
  overflow-y: auto;
`;

const ProcessContainer = styled.div`
  margin: 20px 0 0 10px;
  width: 30%;
`;

const RefundButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f28482;
  color: #f7ede2;
  cursor: pointer;
  margin: 30px 0;
`;

const RemainingMoney = styled.div`
  border: 1px solid black;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProcessView() {
  const { remainingMoney, setRemainingMoney, refundMoney, messages } =
    useContext(ContextStore);

  const messagesEndRef = useRef(null);
  useScrollToBottom(messagesEndRef);

  const messageList = messages.map((message, index) => (
    <div key={index}>{message}</div>
  ));

  return (
    <ProcessContainer>
      <RemainingMoney>남은금액: {remainingMoney}원</RemainingMoney>
      <RefundButton
        onClick={() => {
          setRemainingMoney((remainingMoney) => refundMoney(remainingMoney));
        }}>
        반환
      </RefundButton>
      <MessageContainer>
        {messageList}
        <div ref={messagesEndRef}></div>
      </MessageContainer>
    </ProcessContainer>
  );
}
