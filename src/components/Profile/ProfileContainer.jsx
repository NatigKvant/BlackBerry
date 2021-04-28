import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile } from '../../Redux/profileReducer';
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
}


render() {

  

  return (
    <Profile {...this.props} profile={this.props.profile}
                             />  
  )
 }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)