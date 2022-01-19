import styled from "styled-components";
import VendingMachine from "./components/VendingMachine";
import Wallet from "./components/Wallet";
import React from "react";

const App = () => {
  return (
    <Wrapper>
      <VendingMachine />
      <Wallet />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  padding: 40px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
