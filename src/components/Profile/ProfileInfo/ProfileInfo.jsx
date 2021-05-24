import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import LookingForAJob from '../../common/Preloader/lookingforajob';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';




const ProfileInfo = ({profile,status,updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img /* src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' */ />
      </div>
      <div className = {s.descriptionBlock}>
        <img src ={profile.photos.large} />
        <h1>{profile.fullName}</h1>
        <div> Status:
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
        <div> About Me:
        <h3>{profile.aboutMe}</h3>
        </div>
        <div>
         Contacts:
        <h3>{profile.contacts.facebook}</h3>
        <h3>{profile.contacts.website}</h3>
        <h3>{profile.contacts.vk}</h3>
        <h3>{profile.contacts.twitter}</h3>
        <h3>{profile.contacts.instagram}</h3>
        <h3>{profile.contacts.youtube}</h3>
        <h3>{profile.contacts.github}</h3>
        </div>
        <h3>{profile.contacts.mainLink}</h3>
        <div className={s.lookingForAJob}>
        {profile.lookingForAJob ? <LookingForAJob /> : null}
        <h3>{profile.lookingForAJobDescription}</h3>
        </div>
        </div>
    </div>
  )
}

export default ProfileInfo;