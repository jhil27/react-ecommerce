import {CATAGORIES_ACTION_TYPES} from './catagory.type';
import { createAction } from '../../utils/reducers/reducer.utils';
import {getCategoriesNDocuments} from '../../utils/firebase/firebase.utils';



export const fetchCategoryStart=()=>createAction(CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_START);

export const fetchCategorySuccess=(categoriesArray)=>createAction(CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_SUCCESS,categoriesArray);

export const fetchCategoryFaileur=(error)=>createAction(CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_FAILED,error);

export const fetchCategoriesAsync= ()=>{
    return async (dispatch) => {
        dispatch(fetchCategoryStart());
    try {
        const categoriesArray= await getCategoriesNDocuments();
        dispatch(fetchCategorySuccess(categoriesArray))   
    } catch (error) {
        dispatch(fetchCategoryFaileur(error))
    }
    }
}
