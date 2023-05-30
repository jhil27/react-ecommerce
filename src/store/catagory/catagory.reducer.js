import {CATAGORIES_ACTION_TYPES} from './catagory.type'

const CATAGORIES_INITIAL_STATE={
    catagories:[],
    isLoading:false,
    error:null
}

export const catagoriesReducer=(state=CATAGORIES_INITIAL_STATE,action={})=>{
    const {type,payload}=action;
    switch (type) {
        case CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_START:
            return {...state,isLoading:true};
        case CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_SUCCESS:
           return {...state,catagories:payload,isLoading:false};
        case CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_FAILED:
        return {...state,error:payload,isLoading:false};
        default:
           return state;
    }
}