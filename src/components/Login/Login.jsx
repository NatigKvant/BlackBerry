import React from "react"
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import s from '../common/FormsControls/FormsControls.module.css';
import {login} from '../../Redux/auth-reducer';
import { Redirect } from "react-router";
import { createField, Input } from '../common/FormsControls/FormControls';
import { required } from "../../utils/validators/validators";



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    
    return (
            <form onSubmit={handleSubmit}>
                
                    {createField("Email","email",[required], Input)}
                    {createField("Password","password",[required], Input, {type: "password"})}
                    {createField(null ,"rememberMe",[], Input, {type: "checkbox"}, "rememberMe")}

                    {captchaUrl && <img src ={captchaUrl}/>}
                    {captchaUrl && createField("Symbols from image","captcha",[required], Input, {}) }
                
                { error && <div className={s.formSummaryError}>
                { error}
                </div>
                }
                <div>
                    <button>login</button>
                </div>
            </form>
            
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        
        <div className ={s.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} 
                            captchaUrl={props.captchaUrl} />
            </div>
            
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);