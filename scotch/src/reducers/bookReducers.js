/**
 * Reducers are used to update the state object in your store. Just like actions,
 * your application can have multiple reducers. 
 * For now, we just need a single reducer:
 */


 export default (state=[],action)=>{
    console.log("action type",action.type);
     /**
      * When the store dispatched an action, all the reducers are called.
      So who do we know which action to act on? By using a Switch statement,
       we determine which action was dispatched and act on that.
      */
     switch(action.type){
         case "CREATE_BOOK":{
             console.log("Action book",action.book);
             /**
              * Reducers must be pure functions, which means they can't mutate data
               Our current implementation of the reducer is mutating the array:
              */
             //state.push(action.book);
             /**
              * ...state the spread operator
              The spread operator just pours out the content on the array into the new array.
              */
             return[...state,Object.assign({},action.book) ];
         }
         default:
         return state;
     }
    
 }