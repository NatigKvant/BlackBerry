import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import s from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className = {s.item}>
        <NavLink to ="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to ="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to ="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to ="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className = {s.item}>
        <NavLink to ="/settings" activeClassName={s.activeLink}>Options</NavLink>
      </div>
      <div className = {s.block}>
        <h3>Friends</h3>
        <Sidebar state={props.state.sidebarPage}/>
        <div activeClassName={s.activeLink}></div>
      </div>
    </nav>
 
    
  )
}

export default Navbar;