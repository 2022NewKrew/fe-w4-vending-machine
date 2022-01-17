export default function Product({
  name,
  price,
  quantity,
  remainingMoney,
  buyProduct,
}) {
  function isInStock() {
    return quantity > 0;
  }

  function isBuyable() {
    return remainingMoney >= price;
  }

  function getClassName() {
    let className = "product-container ";
    if (!isInStock()) {
      return className + "out-of-stock";
    }
    if (!isBuyable()) {
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
