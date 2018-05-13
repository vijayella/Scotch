/*Actions are object payloads that are 
identified by a required property type. 
Action creators are methods
 that wrap and return the action object.*/

 export const createBook =(book)=>{
     //return Action
//alert("in action");
     return{         
            type:"CREATE_BOOK",//Unique identifier
            book:book
        }
 };

