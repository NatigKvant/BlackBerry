import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const HeaderBar = () => {
    return (
        <header className={s.header}>
            
            <div className={s.topnav}>
            <NavLink to ="/profile" >Home</NavLink>
            <NavLink to ="/contacts" >Contacts</NavLink>
            <NavLink to ="/about" >About</NavLink>
            </div>
        </header>
        
        
    )
}

export default HeaderBar;