import React from "react";
import Progress from "./Progress";
import ProductList from "./ProductList";
import styled from "styled-components";
import data from "../data/data.json";

const VendingMachine = () => {
  return (
    <Wrapper>
      <ProductList products={data["product"]} />
      <Progress />
    </Wrapper>
  );
};

export default VendingMachine;

const Wrapper = styled.div`
  display: flex;
  border-collapse: collapse;
`;
