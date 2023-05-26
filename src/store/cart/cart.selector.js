import {createSelector} from 'reselect';

////memolise selector cache the input,if input changes then only output changes.
//if selectCatagoryReducers (state.catagory) changes then only output function callback runs.
//improves the performances.
const updateCartItemDetailsReducer=(state)=>state.cart;

export const selectIsCartOpen=createSelector(
    [updateCartItemDetailsReducer],
    (cart) => cart.isCartOpen
  )
  export const selectCartItems = createSelector(
    [updateCartItemDetailsReducer],
    (cart) => cart.cartItems
  );
  
export const newCartCount=createSelector(
  [selectCartItems],
  (cartItems)=>cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0)
)
export const newCartTotalValue=createSelector(
  [selectCartItems],
  (cartItems)=>cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price*currentValue.quantity,
    0 )
)

