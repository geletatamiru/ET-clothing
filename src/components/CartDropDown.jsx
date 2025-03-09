import React from 'react'
import CustomButton from './CustomButton';
import "./CartDropDown.css";
export default function CartDropDown() {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
