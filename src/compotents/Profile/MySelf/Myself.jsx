import React, { useState, useEffect, setStatus } from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import styles from "./Myself.module.css";
import imgLogo from "../../../img/amanim.jpg";
import ProfileDataForm from "./ProfileDataForm";

<<<<<<< HEAD
const Myself = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile,}) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) <Preloader />
=======

const Myself = ({ profile, status, updateStatus, isOwner, saveProfile, savePhoto }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
>>>>>>> fix
  const onSubmit = (formData) => {
    saveProfile(formData);
    setEditMode(false);
  };
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className={styles.myself}>
        <img className={styles.avatarPhoto} src={profile.photos.large || imgLogo}/>
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <div>
          {editMode ? (
            <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} key={"key"} />
          ) : (
            <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} />
          )}
<<<<<<< HEAD
=======
        </div>
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
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
>>>>>>> fix
        </div>
      )}
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
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
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
    </div>
  );
};

export default Myself;
