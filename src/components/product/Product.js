import styled, { css } from "styled-components";

const StyledProduct = styled.div`
  flex: 25%;
  margin: auto 0;
  border: 1px solid grey;
  transition: 0.3s;
  user-select: none;

  box-shadow: inset 0 0 5px
    ${({ quantity, remainingMoney, price }) =>
      quantity <= 0 ? "#282c34" : remainingMoney < price ? "crimson" : "green"};

  cursor: ${({ quantity, remainingMoney, price }) =>
    quantity > 0 && remainingMoney >= price ? "pointer" : "not-allowed"};

  ${({ quantity, remainingMoney, price }) =>
    quantity > 0 &&
    remainingMoney >= price &&
    css`
      &:hover {
        box-shadow: inset 0 0 15px rgb(15, 145, 89);
      }
    `}
`;

const ProductName = styled.div`
  padding: 10px 0;
`;

export default function Product({
  name,
  price,
  quantity,
  remainingMoney,
  buyProduct,
}) {
  return (
    <StyledProduct
      onClick={() => buyProduct(name)}
      quantity={quantity}
      remainingMoney={remainingMoney}
      price={price}
    >
      <ProductName>{name}</ProductName>
      <div className="product-price">{price}원</div>
    </StyledProduct>
  );
}
