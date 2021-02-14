import { Field, reduxForm } from 'redux-form'
import { requaried } from '../../../utis/validators/validators'
import s from './LoginForm.module.css'



let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="text" component="input" placeholder='текст2' />
            </div>
            <Field name="text2"
                component={InputComponent}
                placeholder='text2'
                label='LastName'
                type="text"
                validate={[requaried]} />

            {props.error && (<div className = {s.error}> {props.error} </div>)}
            <div>
                <button type='submit'>aaa</button>
                <button type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>Очистка</button>
            </div>

        </form>
    )
}

let InputComponent = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label htmlFor="firstName">{label}</label>
            <input {...input} placeholder={label} type={type}></input>
            {touched &&
                ((error &&
                    <div className={s.error}>
                        <span>{error}</span>
                    </div>) ||
                    (warning && <span>{warning}</span>))}
            
        </div>


    )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginForm