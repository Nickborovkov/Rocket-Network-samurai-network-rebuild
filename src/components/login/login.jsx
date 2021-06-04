import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={`login`} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={`password`} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={`rememberME`} type={'checkbox'}/> Remember me
            </div>
            <div>
                <button type='submit'>Login</button>
                <button type='reset'>Reset</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login