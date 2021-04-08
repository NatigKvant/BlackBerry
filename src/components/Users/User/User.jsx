import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Users.module.css';

const User = (props) => {

 let path = "/users/" + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
          <img src={props.photoUrl}/>
         
          <NavLink to ={path} activeClassName={s.activeLink}>
              
              <div>
              {props.name}
              <div>
              {props.status}
              </div>
              </div>
              <div>
            <div>
              {props.country}
              </div>
              {props.city}  
              </div>  
          </NavLink> 
          
          </div>
  )
}

export default User;





