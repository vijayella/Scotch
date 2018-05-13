import React from 'react';
//import  classes from '../../containers/App.css';

const validationComponent =(props)=>{
    let classestypes =[];
    if(props.textlength<=5){
        classestypes.push("text-danger text");
      }
      else{
       classestypes.push("text-success text");
      }
    //var message = null;
    if(props.textlength<=5){
        return <div className={classestypes.join('')}> Text too short</div>
    }
    else {
        return <div className={classestypes.join('')}> Text long enough </div>
    }    
}
export default validationComponent;