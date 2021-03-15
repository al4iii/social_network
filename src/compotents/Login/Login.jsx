import React from "react";
import { connect } from "react-redux";
import { login, logOut } from "../../redux/auth-reduser";
import { reduxForm } from "redux-form";
import { createField, Input } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Redirect } from "react-router-dom";
import styles from "../../Common/FormsControls/FormsControls.module.css";
import style from "../Login/Login.module.css";

const maxLength10 = maxLengthCreator(10);
const LoginForm = (props) => {  
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {createField("email", "email", [required], Input, null, null)}
        {createField( "Password", "password", [required, maxLength10], Input, null, null, { type: "password" } )}
        {createField( null, "rememberMe", [], Input, null, null, { type: "checkbox" }, "remember me" )}
        {props.captchaUrl && <img src={props.captchaUrl}/> }
        {props.captchaUrl && createField( "Symbols from img", "captcha", [required], Input, null, null, {}, "" )}
        {props.error && (
          <div className={styles.formSummeryError}>{props.error}</div>
        )}
        <div>
          <button>Login</button>
        </div>
        <div>
          <a href="https://social-network.samuraijs.com/signUp"
            target="_blank" rel="noopener noreferrer"
          >
            sign up
          </a>{" "}
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={style.h1}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logOut })(Login);
