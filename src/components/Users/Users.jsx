import  React from 'react';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import SearchBarContainer from './SearchBar/SearchBarContainer';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged,usersData, ...props}) => {

    return <div className={s.users}>
      <SearchBarContainer currentPage={currentPage} 
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            
            
      <Paginator currentPage={currentPage} 
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
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