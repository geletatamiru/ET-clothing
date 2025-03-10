import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../redux/cartSlice";
import "./CheckoutItem.css";
export default function CheckoutItem({cartItem}) {
  const  {id, name, imageUrl, price, quantity} = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={quantity > 1 ? () => { dispatch(removeItem(cartItem))} : () => dispatch(clearItem(id))}>&#10094;</div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => { dispatch(clearItem(id)) }}>&#10005;</div>
    </div>
  )
}
