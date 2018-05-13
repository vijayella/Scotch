
import React from 'react';

/**
 * Functional components or Dumb components or Presentation components
 *  which only uses the props and will
 * update th UIand cannot update the state.
 */
const AboutPage =()=>{

    return(
    <div className="layout">
      <h3 className="text-primary">About us</h3>
        <div>
            <p className="text-justify text-info text">Hi i am VijayKumar Yella, started working with React JS.
         </p>
         </div>
    </div>
    )
}
export default AboutPage;