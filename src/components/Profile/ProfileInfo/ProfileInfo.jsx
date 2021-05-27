import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import LookingForAJob from '../../common/Preloader/lookingforajob';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({isOwner,profile,status,updateStatus,savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    
    );
}
  

  return (
    <div>
      <div className = {s.descriptionBlock}>
        <img src ={profile.photos.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          
          {editMode 
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
              : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
        
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>

    </div>
  )
}

const ProfileData = ({profile, isOwner,goToEditMode}) => {
  return <div>
  {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
  <div>
  <h1>{profile.fullName}</h1>
  <div> About Me:
  <h3>{profile.aboutMe}</h3>
  </div>
  <div className={s.lookingForAJob}>
  {profile.lookingForAJob ? <LookingForAJob /> : null}
  </div>
  {profile.lookingForAJob &&
  <div>
   <b>My Professional skills </b>{profile.lookingForAJobDescription}
    </div>
  }
  <div>
   <b>Contacts </b>: {Object.keys(profile.contacts).map(key => {
     return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
   })}
    </div>
  </div>
</div>
}



const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;