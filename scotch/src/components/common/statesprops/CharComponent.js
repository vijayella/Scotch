import React from 'react';
/**
 * This is an presentation component using the props
 * @param {*} props 
 */
const charComponent =(props)=>{
return(
    /**
     * Here OnClick of this component is invoking the event in the parent class using props
     */
    <div style={props.style} onClick={props.click}> {props.content}</div>
)
}
export default charComponent;