import './ItemView.css';
import Item from './Item';
export default function ItemView({ products, moneyInput, onClickBuyingItem }) {
  const items = products.map(product =>
    <Item
      onClickBuyingItem={onClickBuyingItem}
      key={product.id}
      product={product}
      isActivated={(moneyInput >= product.price) && (product.stock >= 0)}
    />
  );

  return (
    <div className="itemview__wrap">
      {items}
    </div>
  );
}