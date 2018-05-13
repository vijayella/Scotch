import React, { Component } from 'react';
//import ApplyClass from '../../../components/hoc/applyclass';
//import classes from './Person.css';
import useHoc from '../../../components/hoc/useHoc';
import PropTypes from 'prop-types';
import {AuthContext} from'../../../components/common/LifeCycleHooks'
/**
 *  Prop types  won't work in functional component and can be used 
 * in class components
 * 
 */
class Person extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor', props );
    }

    // componentWillMount () {
    //     console.log( '[Person.js] Inside componentWillMount()' );
    // }

    // componentDidMount () {
    //     console.log( '[Person.js] Inside componentDidMount()' );
    //     this.inputElement.focus();
    // }

    render () {
        console.log( '[Person.js] Inside render()' );
        return (
            
           <div>
               <AuthContext.Consumer>
                {auth => auth ? <p> yes Authenticated</p>:null} 
               </AuthContext.Consumer>
                <p className="text-justify text-info text" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p className="text-justify text-info text">{this.props.children}</p>
                <input ref={(inp)=>{this.inputElement=inp}} className="text-justify text-danger text" type="text" onChange={this.props.changed} value={this.props.name} />
           </div>
        )
    }
}

/**
 * Usage of proptyes for validation
 */
Person.propTypes={
    name:PropTypes.string,
    age:PropTypes.number
}

export default useHoc(Person,"content");