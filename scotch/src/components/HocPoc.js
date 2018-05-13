

import React,{Component} from 'react';
import Applyclass from '../components/hoc/applyclass';
import LifeCycleHooks from '../components/common/LifeCycleHooks'
//import useHoc from '../components/hoc/useHoc'
class HocPoc extends Component {
// constructor(props){
//     super(props);
// }
    render(){
        return(

            <Applyclass>
                <h3 className="text-primary">HOC and Prop-Types</h3>
                <p className="text-justify text-info text"> Higher order Components are absolutely normal react components,
                     they are not representational
                     but wrap other components or add some functionality to our component</p>
                     <p className="text-justify text-info text">You simply use Angular brackets  an empty JSX tag.</p>

                <p className="text-justify text-info text"> This test content for HOC which apply className
                     and will render the children of parent component</p>
                <div>
                    <LifeCycleHooks
                           />
                    </div>
            </Applyclass>
          )
    }

}

export default HocPoc;