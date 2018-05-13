import React from 'react';
import './Button.css';
const button= (props) =>(
    <button className={props.class} onClick={props.clicked}>{props.children}</button>
);

export default button;