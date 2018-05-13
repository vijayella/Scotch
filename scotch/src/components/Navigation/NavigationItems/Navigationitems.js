import React from 'react';
import './NavigationItems.css';

import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigatioItem'
const navigationItems = (props)=>(
    <ul className="NavigationItems">
        <NavigationItem link="/" active>  Burger Builder </NavigationItem>
        <NavigationItem link="/" > CheckOut </NavigationItem>
    </ul>
);
export default navigationItems