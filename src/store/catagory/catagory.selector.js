
import {createSelector} from 'reselect';

////memolise selector cache the input,if input changes then only output changes.
//if selectCatagoryReducers (state.catagory) changes then only output function callback runs.
//improves the performances.
const selectCatagoryReducers=(state)=>state.catagory;
export const selectCategories=createSelector(
  [selectCatagoryReducers],
  (catagoriesSlice)=>catagoriesSlice.catagories
)
export const selectCategory=createSelector(
  [selectCategories],
  (categoryMap)=>categoryMap.reduce((acc,category)=>{
    let {title,items}=category;
    acc[title.toLowerCase()]=items;
    return acc;
    },{})
)

