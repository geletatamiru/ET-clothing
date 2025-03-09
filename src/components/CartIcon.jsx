import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../redux/cartSlice';
import shoppingIcon from "../assets/shopping-bag.svg";
import "./CartIcon.css";
export default function CartIcon() {
  const dispatch = useDispatch();
  return (
    <div className='cart-icon' onClick={() => {dispatch(toggleCartHidden())}}>
      <img src={shoppingIcon} alt="shopping-cart-icon"  className='shopping-icon'/>
      <span className="item-count">0</span>
    </div>
  )
}
