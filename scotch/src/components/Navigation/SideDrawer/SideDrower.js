import React from 'react';

import Logo from '../../Logo/Logo';
import './SideDrawer.css';
import NavigationItems from '../NavigationItems/Navigationitems';  
import BackDrop from '../../UI/Backdrop/BackDrop';
//import Modal from '../../UI/Modal/Modal';

import {Aux} from '../../burger/hoc/Aux';

const sideDrawer =(props) =>{
let AttachedClass = ["SideDrawer Close"];
if(props.show){
    AttachedClass=["SideDrawer Open"];
}
    return(
        <Aux>
        <BackDrop show={props.show} modelClosedClicked ={props.closed}/>
        <div className={AttachedClass}>
            <div className="SideDrawerLogo">
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;

