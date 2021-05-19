import React from "react"
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import s from './Login.module.css';
import {login} from '../../Redux/auth-reducer';
import { Redirect } from "react-router";
import { createField, Input } from '../common/FormsControls/FormControls';
import { required } from "../../utils/validators/validators";



const LoginForm = ({handleSubmit, error}) => {
    
    return (
            <form onSubmit={handleSubmit}>
                
                    {createField("Email","email",[required], Input)}
                    {createField("Password","password",[required], Input, {type: "password"})}
                    {createField(null ,"rememberMe",[], Input, {type: "checkbox"}, "rememberMe")}
                
                { error && <div className={s.formSummaryError}>
                { error}
                </div>}
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