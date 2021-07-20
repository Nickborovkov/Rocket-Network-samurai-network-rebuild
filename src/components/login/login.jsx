import React from "react";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import styles from './login.module.css'

let Login = ({isAuth, loginNewUser}) => {

    let onFormSubmit = (values) => {
        loginNewUser(values.userLogin, values.userPassword, values.rememberMe)
    }

    if (isAuth) return <Redirect to='/profile'/>

    return (
        <div>
            <h2 className={styles.title}>Login</h2>
            <LoginFormRedux onSubmit={onFormSubmit}/>
        </div>
    )
}

export default Login

let Loginform = (props) => {
    return <form className={styles.loginForm}
                 onSubmit={props.handleSubmit}>
        <Field className={styles.input}
               component='input'
               type='text'
               placeHolder='Email...'
               name='userLogin'/>
        <Field className={styles.input}
               component='input'
               type='password'
               placeHolder='Password...'
               name='userPassword'/>
        <div className={styles.checkboxHolder}>
            <Field className={styles.checkbox}
                   component='input'
                   type='checkbox'
                   name='rememberMe'/>
            <p className={styles.checkBoxLabel}>Remember me?</p>
        </div>

        <button className={styles.loginButton}>Login</button>
    </form>
}

let LoginFormRedux = reduxForm({
    form: `loginForm`
})(Loginform)