import React from 'react';
import CharComponent from './CharComponent';

const FunctionalComponents =(props)=>
props.textarray.map((char,index)=>{
    return <CharComponent 
        style={props.style}
        click={()=>props.click(index)}
        content={char}
        key={index}/>
        }
    )


    export default FunctionalComponents;

     