import * as FaIcons from 'react-icons/fa';
import * as AlIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon: <AlIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Players',
        path:'/players',
        icon: <GiIcons.GiTennisRacket/>,
        cName: 'nav-text'
    },
    {
        title: 'Court',
        path:'/',
        icon: <GiIcons.GiTennisCourt/>,
        cName: 'nav-text'
    },
]