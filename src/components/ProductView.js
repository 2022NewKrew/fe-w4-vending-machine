import Product from "./Product";

export default function ProductView({
  products,
  setProducts,
  setMessages,
  remainingMoney,
  setRemainingMoney,
}) {
  function buyProduct(name) {
    const price = products[name].price;
    const currentQuantity = products[name].quantity;
    if (remainingMoney < price || currentQuantity <= 0) {
      const message = `잔액이 부족하여 ${name} 상품을 살 수 없습니다.`;
      setMessages((messages) => messages.concat(message));
      return;
    }
    const message = `${name} 상품이 선택되었습니다`;
    setMessages((messages) => messages.concat(message));

    const tmpProducts = { ...products };
    tmpProducts[name].quantity -= 1;
    setProducts(tmpProducts);

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

  return <div className="product-view">{productList}</div>;
}
