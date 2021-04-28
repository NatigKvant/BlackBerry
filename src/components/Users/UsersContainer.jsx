import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, toggleFollowingProgress, getUsers , follow, unFollow} from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    
  componentDidMount() {
    
     this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
     this.props.getUsers(pageNumber, this.props.pageSize);
  }


render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      usersData = {this.props.usersData}
                      follow = {this.props.follow}
                      unFollow = {this.props.unFollow}
                      followingInProgress = {this.props.followingInProgress}
         />
         </>
         }
}


let mapStateToProps = (state) => {

  return {
  usersData: state.usersPage.usersData,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  connect(mapStateToProps,{
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
    }),
  withAuthRedirect
)(UsersContainer)