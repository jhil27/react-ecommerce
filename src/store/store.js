import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistReducer,persistStore} from 'redux-persist'
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
const middleWares = [process.env.NODE_ENV === 'development' && logger,thunk].filter(
  Boolean
);
const persistConfig={
  key:'root',
  storage,
  whitelist:['cart']
}
/// helps to persist data for multiple sesissons
const persistreducers=persistReducer(persistConfig,rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistreducers, undefined, composedEnhancers);

export const persistor=persistStore(store);