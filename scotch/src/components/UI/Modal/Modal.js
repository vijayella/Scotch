import React,{Component} from 'react';
import './Modal.css'
import {Aux} from '../../burger/hoc/Aux';
import BackDrop from '../Backdrop/BackDrop'

export default class Modal extends Component {
shouldComponentUpdate(nextProps,nextState){
    return nextProps.show !== this.props.show;
}

componentWillUpdate(){
    console.log("[Modal.js] in ComponentWillUpdate js")
}

render(){
    return(
<Aux>
    <BackDrop show={this.props.show} modelClosedClicked={this.props.modelClosed}/>
    <div className="Modal" 
    style={{
        transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity:this.props.show ? '1' : '0'
    }}>
        {this.props.children}
    </div>
    </Aux>);
}
}

