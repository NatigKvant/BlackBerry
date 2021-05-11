import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import LookingForAJob from '../../common/Preloader/lookingforajob';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';




const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img /* src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' */ />
      </div>
      <div className = {s.descriptionBlock}>
        <img src ={props.profile.photos.large} />
        <h1>{props.profile.fullName}</h1>
        <div> Status:
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div> About Me:
        <h3>{props.profile.aboutMe}</h3>
        </div>
        <div>
         Contacts:
        <h3>{props.profile.contacts.facebook}</h3>
        <h3>{props.profile.contacts.website}</h3>
        <h3>{props.profile.contacts.vk}</h3>
        <h3>{props.profile.contacts.twitter}</h3>
        <h3>{props.profile.contacts.instagram}</h3>
        <h3>{props.profile.contacts.youtube}</h3>
        <h3>{props.profile.contacts.github}</h3>
        </div>
        <h3>{props.profile.contacts.mainLink}</h3>
        <div className={s.lookingForAJob}>
        {props.profile.lookingForAJob ? <LookingForAJob /> : null}
        <h3>{props.profile.lookingForAJobDescription}</h3>
        </div>
        </div>
    </div>
  )
}

export default ProfileInfo;