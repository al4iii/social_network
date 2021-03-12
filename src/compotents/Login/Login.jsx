import React from "react";
import { connect } from "react-redux";
import { login, logOut } from "../../redux/auth-reduser";
import { reduxForm } from "redux-form";
import { createField, Input } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Redirect } from "react-router-dom";
import styles from "../../Common/FormsControls/FormsControls.module.css";

const maxLength10 = maxLengthCreator(10);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField ("email", "email" , [required], Input,null,null)}
      {createField ("Password", "password" , [required, maxLength10], Input,null,null, {type: "password"})}
      {createField (null, "rememberMe" , [], Input,null,null, {type: "checkbox"}, "remember me")}
      {props.error && <div className={styles.formSummeryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, { login, logOut })(Login);
