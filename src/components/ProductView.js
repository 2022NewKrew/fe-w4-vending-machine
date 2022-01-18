import { useContext } from "react";
import styled from "styled-components";

import Product from "./product/Product";
import { ProductContext, MoneyContext, MessageContext } from "../App";

const ProductContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  height: 500px;
`;

export default function ProductView() {
  const { products, setProducts } = useContext(ProductContext);
  const { remainingMoney, setRemainingMoney } = useContext(MoneyContext);
  const { setMessages } = useContext(MessageContext);

  function buyProduct(name) {
    const price = products[name].price;
    const currentQuantity = products[name].quantity;

    // 메시지 전송
    if (remainingMoney < price) {
      const message = `잔액이 부족하여 ${name} 상품을 살 수 없습니다.`;
      setMessages((messages) => messages.concat(message));
      return;
    }
    if (currentQuantity <= 0) {
      const message = `${name} 상품이 더 이상 없습니다.`;
      setMessages((messages) => messages.concat(message));
      return;
    }
    const message = `${name} 상품이 선택되었습니다.`;
    setMessages((messages) => messages.concat(message));

    // 재고 수량 변경
    const tmpProducts = { ...products };
    tmpProducts[name].quantity -= 1;
    setProducts(tmpProducts);

    // 잔액 변경
    setRemainingMoney((remainingMoney) => remainingMoney - price);
  }

  const productList = Object.keys(products).map((name) => (
    <Product
      name={name}
      price={products[name].price}
      quantity={products[name].quantity}
      remainingMoney={remainingMoney}
      key={name}
      buyProduct={buyProduct}
    />
  ));

  return <ProductContainer>{productList}</ProductContainer>;
}
