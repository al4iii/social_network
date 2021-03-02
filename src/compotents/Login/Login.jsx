import React from "react";
import { connect } from "react-redux";
import { login, logOut } from "../../redux/auth-reduser";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Redirect } from "react-router-dom";
import styles from "../../Common/FormsControls/FormsControls.module.css";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          placeholder={"email"}
          name={"email"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      {props.error && (
        <div className={styles.formSummeryError}>{props.error}</div>
      )}
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

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logOut })(Login);
