import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from './ShopData';
const initialState = {
  collections: SHOP_DATA
};

const shopSlice = createSlice({
  name: 'shop',
  initialState
 });

export default shopSlice.reducer;
