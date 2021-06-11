import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const HeaderBar = (props) => {

    return (
        <header className={s.header}>
            
            
            <div className={s.topnav}>
                
                
            <NavLink to ="/profile" >Home</NavLink>
            <NavLink to ="/contacts" >Contacts</NavLink>
            <NavLink to ="/about" >About</NavLink>
 
            <div className = {s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to ="/login">Login</NavLink>}
                
            </div>
            </div>
            {/* <SearchBarContainer /> */}
 
        </header>
        
        
    )
}

export default HeaderBar;


