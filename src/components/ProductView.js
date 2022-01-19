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
  const { products, setProducts, setRefundFlag } = useContext(ProductContext);
  const { remainingMoney, setRemainingMoney } =
    useContext(MoneyContext);
  const { setMessages } = useContext(MessageContext);

  function buyProduct(name) {
    const price = products[name].price;
    const currentQuantity = products[name].quantity;
    let message;

    // 메시지 전송
    if (remainingMoney < price) {
      message = `잔액이 부족하여 ${name} 상품을 살 수 없습니다.`;
    } else if (currentQuantity <= 0) {
      message = `${name} 상품이 더 이상 없습니다.`;
    } else {
      message = `${name} 상품이 선택되었습니다. 잠시만 기다려주세요.`;

      // 잔액 변경
      setRemainingMoney((remainingMoney) => remainingMoney - price);

      // 재고 수량 변경
      const tmpProducts = { ...products };
      tmpProducts[name].quantity -= 1;
      setProducts(tmpProducts);

      setRefundFlag(true);

      setTimeout(() => {
        message = `${name} 상품이 나왔습니다.`;
        setMessages((messages) => messages.concat(message));
      }, 2000);
    }
    setMessages((messages) => messages.concat(message));
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
