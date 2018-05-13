
import React,{Component} from 'react';
import {Aux} from '../hoc/Aux';
import '../layout/burgerlayout.css';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import ToolBar from "../../Navigation/ToolBar/ToolBar"
import SideDrawer from '../../Navigation/SideDrawer/SideDrower';

export default class BurgerLayout extends Component{

    state ={
        ShowSideDrawer:true
    }
    sideDrawClosedHandler =()=>{
            this.setState({ShowSideDrawer:false})
    }
    menuClickedHandler=()=>{
        this.setState((prevState)=>{
           return {ShowSideDrawer: !prevState.ShowSideDrawer}
        });
    }

render(){
    return(
    <Aux>
        <ToolBar MenuClicked={this.menuClickedHandler}/>
        <SideDrawer show={this.state.ShowSideDrawer} closed ={this.sideDrawClosedHandler}/>
        <main className="content"> <BurgerBuilder/></main>
     </Aux>);
}
}