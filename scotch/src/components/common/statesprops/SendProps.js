import React, {Component} from 'react';

class SendProps extends Component{
    /**
     * Converting stateless Component to stateful component
     * 1) it is no more a function it should be a class
     * 2) it should extend Component and should import from react
     * 3) in Steteful component we should use this.props and this.state
     *  to render props and state.
     * 
     */
    constructor(props){
        super(props);
        console.log('[SendProps.js] inside constructor :',props);
    }

    componentWillMount(){
        console.log('[SendProps.js] inside component Will Mount method');
      }
      componentWillReceiveProps ( nextProps ) {
        console.log( '[SendProps.js] Inside componentWillReceiveProps', nextProps );
    }

      componentDidMount(){
        console.log('[SendProps.js] inside the componentDidMount method')
        }

        shouldComponentUpdate ( nextProps, nextState ) {
            console.log( '[SendProps.js] Inside shouldComponentUpdate' );
            return false;
          }
          componentWillUpdate ( nextProps, nextState ) {
            console.log( '[SendProps.js] Inside componentWillUpdate', nextProps, nextState );
          }
        
          componentDidUpdate () {
            console.log( '[SendProps.js] Inside componentDidUpdate' );
          }

        
       

    render(){
        console.log('[SendProps.js] inside render method')
     return(         
                    <div>
                        <div > 
                        <input className="" type="text" onChange={this.props.handleTextLength} value={this.props.text}/>
                        </div>
                        <p className="">
                        Length of Input text is :{this.props.textlength}
                        </p>
                 </div>
        );
    }
}   

export default SendProps;