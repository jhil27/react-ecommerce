import {CATAGORIES_ACTION_TYPES} from './catagory.type'

const CATAGORIES_INITIAL_STATE={
    catagories:[]
}

export const catagoriesReducer=(state=CATAGORIES_INITIAL_STATE,action={})=>{
    const {type,payload}=action;
    switch (type) {
        case CATAGORIES_ACTION_TYPES.SET_CATAGORIES:
           return {...state,catagories:payload};
        default:
           return state;
    }
}