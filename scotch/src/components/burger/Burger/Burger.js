import React from 'react';
import './burger.css';
import BurgerIngredeint from '../Burger/BurgerIngredeints/BurgerIngredeint';

const burger =(props) =>{
    /**
     * Object.Keys() method will get the array of keys from given Object.
     */
        let transformedIngredints = Object.keys(props.ingredients)
       .map((key,index)=> {
            return [...Array(props.ingredients[key])].map((_,i)=>{
              return(
                  <BurgerIngredeint key={key+i} type={key}/>
              ) 
            }) ;
          }).reduce((arr,el)=>{
              return arr.concat(el);
          },[]);
        console.log( transformedIngredints);

        if(transformedIngredints.length===0){
            transformedIngredints =<p> Please add Ingredients!</p>
        }
        // .map(ingrdientKey=>{
        //     alert();
        //    return [...Array(props.ingredients[ingrdientKey])]
        //    .map((_,i)=>{
        //        return <BurgerIngredeint key={ingrdientKey+i} type={ingrdientKey}/>
        //    });
        // });
    return(
        <div className="Burger">
            <BurgerIngredeint type="bread-top"/>
            {transformedIngredints}
            <BurgerIngredeint type="bread-bottom"/>
        </div>
    )
}
export default burger;