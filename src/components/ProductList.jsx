import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductList = ({ products }) => {
  return (
    <Wrapper>
      {products.map((ele) => (
        <Product key={ele.id} info={ele} />
      ))}
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.section`
  border: 10px ridge red;
  padding: 30px 30px 100px 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px 30px;
  width: 600px;
`;
