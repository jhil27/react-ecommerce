import {CART_ACTION_TYPES} from './cart.type'

const CART_INITIAL_STATE={
    cartItems:[],
    isCartOpen: false,
}

export const cartReducer=(state=CART_INITIAL_STATE,action={})=>{
    const {type,payload}=action;
    console.log(type)
    switch (type) {
        case CART_ACTION_TYPES.IS_CART_OPEN:
           return {...state,
            isCartOpen:payload};
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {...state,
                cartItems:payload};
        default:
           return state;
    }
}