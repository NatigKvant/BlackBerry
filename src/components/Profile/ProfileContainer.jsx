import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);