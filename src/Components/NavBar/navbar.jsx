import React from 'react';
import {Link} from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import './navbar.css';

import { useState } from 'react';


const NavBar = () => {
    const [sidebar, setSidebar] = useState();

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <div className="navbar">
                <Link to='#' >
                    <FaIcons.FaBars className='menu-bars' onClick={showSidebar}></FaIcons.FaBars>
                </Link>
                <h2 className='nav-title'>Baufest Tennis</h2>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index)=> {
                        return(
                            <li key={index} className={ item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;