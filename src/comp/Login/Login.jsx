import { Button } from "react-bootstrap"
import s from './Login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "../forms/LoginForm/LoginForm";
import { connect } from 'react-redux'
import { login } from './../../redax/one-reduser'

const Login = (props) => {


    return <div className = {s.grid}>
        <Button variant = "outline-warning">eddddd</Button>
        <LoginForm onSubmit = {props.login}/>
        
    </div>
}


export default connect(null, {login})(Login)