import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatus, getUserProfile, updateStatus } from '../../Redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {

componentDidMount() {
  let userId = this.props.match.params.userId;
  if(!userId) {
    userId=1781;
  }

  /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
          this.props.setUserProfile(response.data);
      }); */

      /* usersAPI.getProfile(userId).then(data => {
        this.props.setUserProfile(data);
      }); */

      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
}


render() {

  

  return (
    <Profile {...this.props} 
              profile={this.props.profile}
              status = {this.props.status}
              updateStatus = {this.props.updateStatus}
                             />  
  )
 }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus,updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)