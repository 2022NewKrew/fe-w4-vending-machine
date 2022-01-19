import { useContext } from "react";
import styled from "styled-components";
import { ContextStore } from "../context/context";

const WalletContainer = styled.div`
  margin-top: 10px;
  width: 20%;
`;

const MoneyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoneyItemDiv = styled.div`
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  margin: 10px;
`;

const MoneyItemButton = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f6bd60;
  }
`;

export default function WalletView() {
  const {
    totalMoney,
    increaseMoney,
    insertedMoney,
    setInsertedMoney,
    pushMessage,
  } = useContext(ContextStore);

  function insertMoney(key) {
    setInsertedMoney({ ...insertedMoney, [key]: insertedMoney[key] + 1 });
    increaseMoney(Number(key));

    const message = `${key}원이 투입되었습니다.`;
    pushMessage(message);
  }

  const moneyContainers = Object.entries(insertedMoney).map(([key, value]) => (
    <MoneyContainer key={key}>
      <MoneyItemButton
        onClick={() => {
          insertMoney(key);
        }}>
        {key}원
      </MoneyItemButton>
      <MoneyItemDiv>{value}개</MoneyItemDiv>
    </MoneyContainer>
  ));

  return (
    <WalletContainer>
      {moneyContainers}
      <div>투입금액: {totalMoney}원</div>
    </WalletContainer>
  );
}
