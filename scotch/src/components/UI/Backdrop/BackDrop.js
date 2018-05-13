import React from 'react';
import './Backdrop.css';

const backDrop =(props)=>(
    props.show ? <div className="BackDrop" onClick={props.modelClosedClicked}></div> :null
);

export default backDrop;