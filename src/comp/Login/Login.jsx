import s from './Login.module.css'
import LoginForm from "../forms/LoginForm/LoginForm";
import { connect } from 'react-redux'
import { login } from './../../redax/one-reduser'

const Login = (props) => {


    return <div className = {s.grid}>
        <LoginForm onSubmit = {props.login}/>
        
    </div>
}


export default connect(null, {login})(Login)