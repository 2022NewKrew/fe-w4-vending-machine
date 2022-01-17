export default function Product({
  name,
  price,
  quantity,
  remainingMoney,
  buyProduct,
}) {
  function isNotInStock() {
    return quantity <= 0;
  }

  function isNotBuyable() {
    return remainingMoney < price;
  }

  function getClassName() {
    const className = "product-container ";
    if (isNotInStock()) {
      return className + "out-of-stock";
    }
    if (isNotBuyable()) {
      return className + "not-buyable";
    }
    return className + "buyable";
  }

  return (
    <div className={getClassName()} onClick={() => buyProduct(name)}>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}원</div>
    </div>
  );
}
