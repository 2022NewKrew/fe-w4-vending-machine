import './Product.css';
export default function Product({ products, moneyInput }) {
  const productsList = products.map((product, idx) =>
    <div key={idx} className="product__item">
      <div className="product__name">{product.name}</div>
      <div className="product__price">{product.price}원</div>
    </div>
  );

  return (
    <div className="product__wrap">
      {productsList}
    </div>
  );
}