import Product from "./Product";

export default function ProductView({
  products,
  setProducts,
  messages,
  setMessages,
  remainingMoney,
  setRemainingMoney,
}) {
  function buyProduct(name) {
    const price = products[name].price;
    const currentQuantity = products[name].quantity;
    if (remainingMoney < price || currentQuantity <= 0) {
      return;
    }
    const tmpProducts = { ...products };
    tmpProducts[name].quantity -= 1;
    const message = `${name} 상품이 선택되었습니다`;
    setMessages((messages) => messages.concat(message));
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
