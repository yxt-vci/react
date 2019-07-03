import {applyMiddleware,createStore} from 'redux';
import reducer from './Reducer'
import thunk  from 'redux-thunk'
let store = ()=>createStore(reducer,applyMiddleware(thunk));
export default store;