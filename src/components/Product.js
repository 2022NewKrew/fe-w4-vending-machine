export default function Product({
  name,
  price,
  quantity,
  remainingMoney,
  buyProduct,
}) {
  function getClassName() {
    const className = "product-container ";
    if (quantity <= 0) {
      return className + "out-of-stock";
    }
    if (remainingMoney < price) {
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
