import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
 let path = "/dialogs/" + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
          <img src='https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' />  
          <NavLink to ={path} activeClassName={s.activeLink}>{props.name}</NavLink> 
          </div>
  )
}

export default DialogItem;