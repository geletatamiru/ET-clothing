import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./CheckoutPage.css";
import CheckoutItem from '../components/CheckoutItem';
export default function CheckoutPage() {
  const cartItems = useSelector(state => state.cart.cartItems );
  const total = useSelector(state => {
    return state.cart.cartItems.reduce((acc,cartItem) => acc + cartItem.quantity*cartItem.price,0);
  })
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-clock">
          <span>Product</span>
        </div>
        <div className="header-clock">
          <span>Description</span>
        </div>
        <div className="header-clock">
          <span>Quantity</span>
        </div>
        <div className="header-clock">
          <span>Price</span>
        </div>
        <div className="header-clock">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        })
      }
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
}
