import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from './cartUtils';
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
    }
     
  },
});

export const { toggleCartHidden, addItem } = cartSlice.actions;
export default cartSlice.reducer;
