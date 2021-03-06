import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, toggleFollowingProgress, requestUsers , follow, unFollow} from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getPageSize, getTotalUsersCount, getIsFetching, getFollowingInProgress, getUsers } from '../../Redux/users-selectors';


class UsersContainer extends React.Component {

    
  componentDidMount() {
    
     this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
     this.props.requestUsers(pageNumber, this.props.pageSize);
  }


render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users        totalUsersCount = {this.props.totalUsersCount}
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
  usersData: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,{
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
    }),
  /* withAuthRedirect */
)(UsersContainer)