import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../redux/cartSlice';
import shoppingIcon from "../assets/shopping-bag.svg";
import "./CartIcon.css";
export default function CartIcon() {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.cart.cartItems.reduce((acc,cartItem) => acc + cartItem.quantity,0))
  return (
    <div className='cart-icon' onClick={() => {dispatch(toggleCartHidden())}}>
      <img src={shoppingIcon} alt="shopping-cart-icon"  className='shopping-icon'/>
      <span className="item-count">{itemCount}</span>
    </div>
  ) 
}
