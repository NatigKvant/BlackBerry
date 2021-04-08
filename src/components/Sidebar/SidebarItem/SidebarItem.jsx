import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Sidebar.module.css';

const SidebarItem = (props) => {
 let path = "/profile/" + props.id
  return (
    <div className={s.sidebar + ' ' + s.active}>
          <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' />  
          <NavLink to ={path} activeClassName={s.activeLink}>{props.name}</NavLink> 
          </div>
  )
}

export default SidebarItem;