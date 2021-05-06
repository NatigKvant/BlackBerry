import React from 'react';
import HeaderBar from './HeaderBar';
import {logout} from '../../Redux/auth-reducer';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';

class HeaderBarContainer extends React.Component {
    

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
    logout
})(HeaderBarContainer);

