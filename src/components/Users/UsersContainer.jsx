import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersTotalCountAC, setUsersAC, unfollowAC } from '../../Redux/usersReducer';
import Users from './Users';


let mapStateToProps = (state) => {

  return {
  usersData: state.usersPage.usersData,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
