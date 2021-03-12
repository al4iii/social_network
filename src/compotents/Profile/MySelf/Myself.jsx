import React, { useState, useEffect, setStatus } from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import styles from "./Myself.module.css";
import imgLogo from "../../../img/amanim.jpg";
import ProfileDataForm from "./ProfileDataForm";

const Myself = ({ profile, status, updateStatus, isOwner, saveProfile, savePhoto }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return ( <Preloader />)
  }
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>      
      <div className={styles.myself}>
        <img className={styles.avatarPhoto} src={profile.photos.large || imgLogo}/>        
        <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          {editMode ? (<ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} key={"key"} />
          ) : ( 
          <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} /> )}
        </div>        
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
    </div>
  
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={styles.contact}>
      
      <div>
        <b>Full name:</b>
        {profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b> {profile.lookingForAJob ? " yes" : " no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
    </div>
  );
};

export default Myself;
