import React from "react"
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import s from './Login.module.css';
import {login} from '../../Redux/auth-reducer';
import { Redirect } from "react-router";




const LoginForm = (props) => {
    
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={"input"} className={s.login}/>
                </div>
                <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} type={"password"} className={s.login}/>
                </div>
                <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
            
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className ={s.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);