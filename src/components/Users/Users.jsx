import React from 'react';
import s from './Users.module.css'


const Users = (props) => {

if (props.usersData.length === 0) {
props.setUsers([
    {id:1, photoUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', followed: true, name:'Dmitry K.',location:{country:'Belarus', city:'Minsk'},status:'I am looking for a job '},
    {id:2, photoUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', followed: false,name:'Svetlana D. ',location:{country:'Belarus', city:'Minsk'},status:'I am so pretty'}
   ])

}

return <div className={s.users}>
    {
       props.usersData.map(u => <div key={u.id}>
           <span>
               <div>
                   <img src={u.photoUrl} className={s.users} />
               </div>
               <div>
                   { u.followed
                   ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                   : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
               </div>
           </span>
           <span>
               <span>
                   <div>{u.name}</div>
                   <div>{u.status}</div>
               </span>
               <span>
                   <div>{u.location.country}</div>
                   <div>{u.location.city}</div>
               </span>
           </span>
           </div>)
         }
     </div>

}


export default Users;

