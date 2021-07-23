import React from "react";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import styles from './login.module.css'
import {required} from "../../utils/formHelpers/validators";
import {Input} from "../../utils/formHelpers/formControls";

let Login = ({isAuth, loginNewUser, captcha}) => {

    let onFormSubmit = (values) => {
        loginNewUser(values.userLogin, values.userPassword, values.rememberMe, values.userCaptcha)
    }

    if (isAuth) return <Redirect to='/profile'/>

    return (
        <div>
            <h2 className={styles.title}>Login</h2>
            <LoginFormRedux onSubmit={onFormSubmit} captcha={captcha}/>
        </div>
    )
}

export default Login

let Loginform = ({error, handleSubmit, captcha}) => {
    return <form className={styles.loginForm}
                 onSubmit={handleSubmit}>
        <Field className={styles.input}
               component={Input}
               type='text'
               placeholder='Email...'
               name='userLogin'
               validate={[required]}/>
        <Field className={styles.input}
               component={Input}
               type='password'
               placeholder='Password...'
               name='userPassword'
               validate={[required]}/>
        <div className={styles.checkboxHolder}>
            <Field className={styles.checkbox}
                   component='input'
                   type='checkbox'
                   name='rememberMe'/>
            <p className={styles.checkBoxLabel}>Remember me?</p>
        </div>
        {
            captcha && <div>
                <img src={captcha} alt="captcha" />
                <Field className={styles.input}
                       component = {Input}
                       type='input'
                       placeholder='Enter captcha...'
                       name='userCaptcha'/>
            </div>
        }
        {
            error && <div className={styles.errorDiv}>{error}</div>
        }
        <button className={styles.loginButton}>Login</button>
    </form>
}

let LoginFormRedux = reduxForm({
    form: `loginForm`
})(Loginform)