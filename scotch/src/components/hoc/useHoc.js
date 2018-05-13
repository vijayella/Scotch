
import React from 'react';

const useHoc=(WrappedComponent,className)=>{
     return (props)=>(
        <div className={className}>
                <WrappedComponent {...props}/>
        </div> 
    )

    
}

export default useHoc;