import React from 'react';
import './ToolBar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../../Navigation/NavigationItems/Navigationitems';

const toolBar = (props)=>(

<header className="ToolBar">
    <DrawerToggle clicked ={props.MenuClicked}/>
    <div className="ToolBarlogo">
    <Logo/>
    </div>
    <nav className="DesktopOnly">
        <NavigationItems/>
    </nav>
</header>
)

export default toolBar;