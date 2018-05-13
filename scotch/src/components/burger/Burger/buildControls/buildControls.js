import React from 'react';
import BuildControl from '../buildControls/buildControl/buildControl';
import './buildcontrols.css';

const controls=[
    {label:'Salad',type:"salad"},
    {label:'Bacon',type:"bacon"},
    {label:'Cheese',type:"cheese"},
    {label:'Meat',type:"meat"}
]
const buildControls=(props)=>(
    <div className="BuildControls">
    <p> Current Price :<strong> {props.price.toFixed(2)} </strong></p>
{controls.map(ctrl =>(
<BuildControl
 key={ctrl.label} 
 label={ctrl.label} 
 added ={()=> props.IngredintAdded(ctrl.type)}
 removed={()=>props.IngredientRemoved(ctrl.type)}
 disabled ={props.disabled[ctrl.type]} />
))};

<button disabled={!props.purchased} className="OrderButton" onClick={props.ordered}> ORDER NOW </button>
</div>
)
export default buildControls;