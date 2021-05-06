import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class redirectComponent extends React.Component {
        render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return <Component {...this.props} />
    }
}


  
  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(redirectComponent)
    
  return connectedAuthRedirectComponent;
}