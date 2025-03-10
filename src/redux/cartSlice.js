import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './cartUtils';
const initialState = {
  hidden: true,
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action) => {
      addItemToCart(state.cartItems, action.payload);
    },
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(cartItem => action.payload != cartItem.id);
    }
    ,
    removeItem: (state, action) => {
      removeItemFromCart(state.cartItems, action.payload);
    }
  },
});

export const { toggleCartHidden, addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
