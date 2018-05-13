import React,{Component} from 'react';
import {Aux} from '../../hoc/Aux';
import Button from '../../../UI/Button/Button'


export default class OrderSummary extends Component{

    componentWillUpdate(){
        console.log("[OrderSummary.js] in wilupdate method");
    }
    
render(){
const OrderSummary=Object.keys(this.props.ingredients)
.map(key=>{
    return <li key={key}> <span> {key} </span>:{this.props.ingredients[key]}</li>
})
    return(
        <Aux disabled={this.props.disabled}>
            <h3> Your Order </h3>
            <ul>{OrderSummary} </ul>
            <p> <strong> Total Price:${this.props.totalAmount.toFixed(2)}</strong></p>
            <p> Continue to checkout?</p>
           <Button class="Button Danger" clicked ={this.props.modelClosed}>Cancel</Button>
           <Button class="Button Success" clicked={this.props.ContinueOrder}>Continue</Button>
        </Aux>
    )
}
}
