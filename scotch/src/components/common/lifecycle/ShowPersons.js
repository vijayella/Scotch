import React from 'react';

//import classes from './Cockpit.css';

const showPersons = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = "Red";
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push("text-danger" ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( "text-success" ); // classes = ['red', 'bold']
    }

    return (
        <div className="">
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
<div>
          {/* <p className="text-info text text-justify"> Context Api are used to get the Global state in and around in our app</p>
          <button onClick={props.login}> Context API</button> */}
          </div>
        </div>
    );
};

export default showPersons;