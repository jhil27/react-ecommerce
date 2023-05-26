import {CATAGORIES_ACTION_TYPES} from './catagory.type';
import { createAction } from '../../utils/reducers/reducer.utils';

export const setCategories = (categoriesArray) =>createAction(CATAGORIES_ACTION_TYPES.SET_CATAGORIES, categoriesArray);