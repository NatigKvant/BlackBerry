import React from 'react'
import { Field } from 'redux-form';
import s from './FormsControls.module.css'

export const dialogsTextarea = ({input,meta,...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
            <input className={s.dialogInput} {...input} {...props}/>
            </div>
           {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const profileTextarea = ({input,meta,...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
            <input className={s.profileInput} {...input} {...props}/>
            </div>
           {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = ({input,meta,...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
            <input className={s.profileInput} {...input} {...props}/>
            </div>
           {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
<div>
    <Field placeholder={placeholder}
           name={name} 
           validate={validators}
           component={component} 
           className={s.login}
           {...props}/> {text}
</div>
)
    


