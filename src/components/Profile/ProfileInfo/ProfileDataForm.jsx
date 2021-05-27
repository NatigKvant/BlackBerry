import React from "react"
import { reduxForm } from "redux-form";
import {createField, Input, profileTextarea} from "../../common/FormsControls/FormControls";
import style from './ProfileInfo.module.css';
import s from "../../common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    { error && <div className={s.formSummaryError}>
                { error}
                </div>
    }
    <div>
    <b>Full name</b>{createField("Full name","fullName", [], Input)}
    </div>
    <div>
    <b>About Me</b>:
    {createField("About me","aboutMe", [], profileTextarea )}
    </div>
    <div className={style.lookingForAJob}>
    <b>Looking for a job</b>:{createField("","lookingForAJob", [], Input, {type: "checkbox"} )}
    </div>
    
    <div>
     <b>My Professional skills </b>
     {createField("enter skills","lookingForAJobDescription", [], profileTextarea )}
      </div>
    <div>
     <b>Contacts </b>: {Object.keys(profile.contacts).map(key => {
       return <div key={key} className= {style.contact}>
      <b>{key}: {createField(key,"contacts." + key, [], Input)}</b>
      </div>
     })}
      </div>
  </form>
  }

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;