


import React,{Component} from 'react';
import './burgeringredeints.css';
import PropTypes from 'prop-types';
export default class BurgerIngredeint extends Component{

    render()
    {
 
        let ingredeint=null;

        switch(this.props.type) {
            case ('bread-bottom') :
             ingredeint = <div className="BreadBottom"></div>
                                    break;
            case ('bread-top') : 
            ingredeint = (<div className="BreadTop">
            <div className="Seeds1"></div> <div className="Seeds2"></div>
            </div>)
             break;
             case('meat') :
             ingredeint =<div className="Meat"></div>
             break;
             case('cheese') :
             ingredeint =<div className="Cheese"></div>
             break;
             case('bacon') :
             ingredeint =<div className="Bacon"></div>
             break;
             case('salad') :
             ingredeint =<div className="Salad"></div>
             break;
            default:ingredeint=null;
        }   
        return ingredeint;           
        }
}

BurgerIngredeint.propTypes={
type:PropTypes.string.isRequired
};
