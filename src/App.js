import styled from "styled-components";
import VendingMachine from "./components/VendingMachine";
import Wallet from "./components/Wallet";

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
  display: flex;
`;
