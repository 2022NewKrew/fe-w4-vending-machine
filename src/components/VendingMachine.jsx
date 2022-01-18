import React from "react";
import Progress from "./Progress";
import ProductList from "./ProductList";
import styled from "styled-components";

const VendingMachine = () => {
  return (
    <Wrapper>
      <ProductList />
      <Progress />
    </Wrapper>
  );
};

export default VendingMachine;

const Wrapper = styled.div`
  display: flex;
  border-collapse: collapse;
`;
