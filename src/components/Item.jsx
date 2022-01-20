import './Item.css';
import { decimalSeperator } from '../utils/helper';

export default function Item({ product, isActivated, onClickBuyingItem }) {

  return (
    <div
      className={isActivated ? "item__wrapper_active" : "item__wrapper_inactive"}
      onClick={() => onClickBuyingItem(product)}
    >
      <div className={"item__name"}>{product.name}</div>
      <div className={"item__price"}>가격 : {decimalSeperator(product.price)}원</div>
      <div className={"item__stock"}>재고 : {product.stock}</div>
    </div>
  );
}