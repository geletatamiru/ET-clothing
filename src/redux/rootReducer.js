import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
import directoryReducer from "./directorySlice";
import shopReducer from "./shopSlice";
const persistConfig = {
  key: "root",
  storage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  user: userReducer,
  cart: persistedReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default rootReducer;
