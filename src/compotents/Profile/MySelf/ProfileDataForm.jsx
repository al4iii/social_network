import React from "react";
import { createField, Input,Textarea } from "../../../Common/FormsControls/FormsControls";
import styles from "./../MySelf/Myself.module.css";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit ,profile, goToEditMode, error }) => {
  return (
    <form className={styles.contact} onSubmit={handleSubmit}>
        {error && <div className={styles.formSummeryError}>{error}</div>}
      <div>
        <button onClick={goToEditMode}>save</button>
      </div>
      <div>
        <b>Full name:</b>
        {createField("Full name", "fullName", [], Input, "", "", {}, "")}
      </div>
      <div>
        <b>Looking for a job: </b>{createField( "", "lookingForAJob", [], Input, "", "", { type: "checkbox" }, "" )}
      </div>
      <div>
        <b>My professional skills:</b>{" "}
        {createField("your skill", "lookingForAJobDescription", [], Textarea, "", "", {}, "" )}
      </div>
      <div>
        <b>About me: </b> {createField("About me...", "aboutMe", [], Textarea, "", "", {}, "")}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={styles.contact}>
              <b>{key}: {createField(key, "contacts."+key, [], Input, "", "", {}, "")} </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form:"edit-profile",})(ProfileDataForm)
export default ProfileDataFormReduxForm;
