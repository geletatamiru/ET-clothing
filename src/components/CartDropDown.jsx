import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../redux/cartSlice';
import CartItem from './CartItem';
import CustomButton from './CustomButton';
import "./CartDropDown.css";
export default function CartDropDown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length ? 
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
          : <span className='empty-message'>Your cart is empty.</span>
        }
      </div>
      <CustomButton onClick={() => { navigate("/checkout"); dispatch(toggleCartHidden()) }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
