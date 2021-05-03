import React from 'react';
import HeaderBar from './HeaderBar';
import {toggleIsFetching,getAuthUserData,logout} from '../../Redux/auth-reducer';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';

class HeaderBarContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
      /* axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
      }) */
      /* authMeAPI.AuthMe().then(data => {
        this.props.toggleIsFetching(false)
          if (data.resultCode === 0) {
              let {id,email,login} = data.data;
              this.props.setAuthUserData(id, email, login);
          }
      }); */
      this.props.getAuthUserData()
    }

    render() {
    return <>
        { this.props.isFetching ? <Preloader /> : null}
        <HeaderBar {...this.props}/>
        </>
    
  }
}
const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps,{
    getAuthUserData,
    toggleIsFetching,
    logout
})(HeaderBarContainer);

