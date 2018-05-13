import React, { Component } from 'react';

//import classes from './App.css';
import Persons from './lifecycle/Persons';
import ShowPersons from './lifecycle/ShowPersons';

export const AuthContext = React.createContext(false);

 export default class extends Component {
  constructor( props ) {
    super( props );
    console.log( '[App.js] Inside Constructor', props );
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      authenticated:false
    };
  }

  componentWillMount () {
    console.log( '[App.js] Inside componentWillMount()' );
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }

  shouldComponentUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside shouldComponentUpdate' );
    return true;
  }

//   static getDerivedStateFromProps(nextProps,prevState){
//     /**
//      * This life cycle hook is introoduced in React 16.3 version
//      * This method will get executed when ever there is achange in the props.
//      * And it gives a chance to update the state using the updated props.
//      * 
//      */

//      console.log('[LifeHooks.js] in getDerivedFromProps method',nextProps,prevState);
// /**
//  * Here we will update the state with the nextProps and will the updated state.
//  */
//      return prevState;
     
//   }

  // getSnapshotBeforeUpdate(){
  //   /**
  //    * It will get the Snapshot of your DOm right before changing it's state.
  //    * 
  //    */
  // }
  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
  }

  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }
  loginHandler=() =>{
    const doesAuthenticate = this.state.authenticated;
   
     this.setState({
       authenticated:!doesAuthenticate
     })
  }

  render () {
    console.log( '[App.js] Inside render()' );
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        // isAuthenticated={this.state.authenticated} 
        />;
    }

    return (
      <div className="row content">
      <div className="col-md-9 col-sm-9 subcontent">
            <button onClick={() => { this.setState( { showPersons: true } ) }}>Show Persons</button>
            <ShowPersons
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              login={this.loginHandler}
              clicked={this.togglePersonsHandler} />
            <AuthContext.Provider value={this.state.authenticated}>
            {persons}
            </AuthContext.Provider>
        </div>
     
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


