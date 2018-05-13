
import React,{Component} from 'react';
import FunctionalComponents from './statesprops/FunctionalComponent';
import SendProps from './statesprops/SendProps';
import ValidationComponent from './statesprops/ValidationComponent';

//import LifeCycleHooks from './LifeCycleHooks';
/**
 * Container components or Stateful components in which we can contain state and 
 * can connect to store to update the state.
 */
export default class Components extends Component{
/**
 * Constructor is the place where we initially start date with default values 
 * And gets all the pros passed from store.
 * 
 * @param {*} props 
 */
    constructor(props){
        super(props);
        console.log('[Components.js] inside constructor',props);
        this.state=(
          {
          textlength : '',
          text:'' ,
          textarray:[]
          })
    }
/**
 * The second method to execute is componentWillmount() method
 * This method is by React and will rearly used.
 * This method is used to update the state or last minute optimization.
 * For using Web requests and updating the state is not recommended
 * 
 * @param {*} param0 
 */
componentWillMount(){
    console.log('[Components.js] inside componentWill Mount method');
  }
  componentWillReceiveProps ( nextProps ) {
    console.log( '[Components.js] Inside componentWillReceiveProps', nextProps );
}

  shouldComponentUpdate ( nextProps, nextState ) {
    console.log( '[Component.js] Inside shouldComponentUpdate' );
    return true;
  }
  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[Component.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[Component.js] Inside componentDidUpdate' );
  }

  componentDidMount(){
    console.log('[Component.js] inside the componentDidMount method')
    }
  handleTextLength=((event)=>{
    this.setState({
    textlength:event.target.value.length,
    text:event.target.value,
    textarray:event.target.value.split('')
    })
    })
    
    deleteChar=((index)=>{
    const temparray = [...this.state.textarray];
    temparray.splice(index,1);
    const str =temparray.join('');
    this.setState({
    textarray:temparray,
    text:str,
    textlength:temparray.length
    })
    })

  /**
 * The third method is render() method and will hold the jsx code and will
 * decides the DOM updations and will call each time when a state is changed.
 * It also knows which all the child components it holds and will
 * execute the child components
 */

    render(){

        console.log('[Components.js] i am inside render method');
        let style={
        marginTop:'20px'
        };
        
        let styling = {
        display:'inline-block',
        padding:'18px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid green',
        
        };
        
        
        let charcomponent=(
        <div>
        {
         <FunctionalComponents textarray={this.state.textarray}
        style={styling} click ={this.deleteChar}/>
        }
        
        </div>);
        if(this.state.textlength<=5){
        styling.border='1px solid red';
        style.color='red';
        }
        
        return(
            <div className="layout">
                    <h3 className="text-primary"> Components States & Props Event Handlers</h3>
              <div className="row content"> 
                <div className="col-md-4 col-sm-4 subcontent">
                    <SendProps
                            style={style}
                            text={this.state.text}   
                            textlength={this.state.textlength}
                            handleTextLength={this.handleTextLength}/>

                            <ValidationComponent
                            textlength={this.state.textlength}/>
                           
                            {charcomponent}
                    </div>

                    
                   </div>
                </div>
        )
    }


}