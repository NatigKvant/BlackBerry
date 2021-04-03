import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Sidebar.module.css';

const SidebarItem = (props) => {
 let path = "/profile/" + props.id
  return (
    <div className={s.sidebar + ' ' + s.active}>
          <img src='https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' />  
          <NavLink to ={path} activeClassName={s.activeLink}>{props.name}</NavLink> 
          </div>
  )
}

export default SidebarItem;