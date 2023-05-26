import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import {catagoriesReducer} from './catagory/catagory.reducer';
import { cartReducer } from './cart/cart.reducer';


export const rootReducer = combineReducers({
  user: userReducer,
  catagory:catagoriesReducer,
  cart:cartReducer
});