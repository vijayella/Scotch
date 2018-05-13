import React,{Component} from 'react';
import {connect} from 'react-redux';
import  * as bookActions from '../../actions/bookActions';

/**
 * We need to pass down the states to our 
 * components props, same goes with the actions.
 */
/**
 * Best practice demands that we do this
 * in container components while convention demands
 * that we us mapStateToProps for states and mapDispatchToProps for actions.
 */
class Book extends Component{

    constructor(props){
    //     //Pass props back to parent
     super(props);
    //     //const state=[];
    this.titleInput = React.createRef();
    }

    submitBook(input){
       //alert("input is " + input.title);
       this.props.createBook(input);
       // console.log("After submitting",this.props.books)
      }

    render(){
        return(
            <div className="layout">
            <h3 className="text-primary content">React Redux Sync Data And Refs Usage</h3>
            <div className="content">
            <p className="text-justify text-info text">
                    References are represented by a Key work "ref".
                    "ref" are only avaialble and used in stateful components. 
               </p>

               <p className="text-justify text-info text">
                    Refernces are only used to achieve some extra functionality
                    but it should not use for applying style. 
               </p>
               <p className="text-justify text-info text">
                    React 16 allows us to use forwrd reference i.e. we get a 
                    reference from outside the component</p>

            
                <h3 className="text-info text"> Books </h3>
                    <ul className="list-group">
                       { /*
                       * traverses book array
                         */}
                        {this.props.books.map((b,i)=> {
                            return(
                            <li className="list-group-item text-danger" key={i}> {b.title}</li>)
                        })}

                    </ul>
                </div>
           
            <div className="content">
        
          <h3 className="text-info text">Books Form</h3>
                <form onSubmit={e => {
                    // Prevent request
                    e.preventDefault();
                    // Assemble inputs
                    let input = {title: this.titleInput.current.value};
                    // Call handler
                    this.submitBook(input);
                    // Reset form
                   e.target.reset();
                }}>
                    <input type="text" name="title" ref={this.titleInput} />
                    <input type="submit" />
                </form>
        </div>
      </div>
        )
    }

}
//export default Book;

//Mapping state to props

const mapStateToProps = (state, ownProps) => {
    //alert("in main",state)
    console.log("state",state);
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //// You can now say this.props.createBook
        createBook: (book) => {
            dispatch(bookActions.createBook(book))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Book);

