import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CustomButton from './CustomButton';
import "./CartDropDown.css";
export default function CartDropDown() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
