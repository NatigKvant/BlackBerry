import  React from 'react';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged,usersData, ...props}) => {

    return <div className={s.users}>
            <Paginator currentPage={currentPage} 
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
     <div>                  
    
    {
       usersData.map(u => <User user={u}
                                followingInProgress= {props.followingInProgress}
                                key={u.id}
                                unFollow={props.unFollow}
                                follow={props.follow}
                                />)
         }
      </div>
     </div>
}

export default Users;