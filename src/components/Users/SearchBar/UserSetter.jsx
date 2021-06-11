import  React from 'react';
import s from './UserSetter.module.css';
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from 'react-router-dom';

let UserSetter = ({user}) => {

    return <div className={s.users}>

           <span>
               <div>
                   <NavLink to={'/profile/' + user.id}>
                   <img src={ user.photos.small != null ? user.photos.small : userPhoto} className={s.users} />
                   </NavLink>
               </div>
           </span>
           <span>
               <span>
                   <div>{user.name}</div>
                   <div>{user.status}</div>
               </span>
               <span>
                   <div>{"u.location.country"}</div>
                   <div>{"u.location.city"}</div>
               </span>
           </span>
           </div>
         }
    
    


export default UserSetter;