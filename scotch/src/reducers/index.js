/**
 * we could have as much reducers as we want 
 * but unlike actions, Reducers are not independent and can't standalone.
 * The have to be put together and passed as one to the store.
 * The act of putting multiple reducers together is known as reducer combination
 *  and the combined reducer is the root reducer.
 */

 //It's ideal to combine reducers at the root of the reducers' folder:

 import {combineReducers} from 'redux';

 import books  from './bookReducers';

 export default combineReducers({
     books:books
     //More reducers can be added here with ',' seperator
 });