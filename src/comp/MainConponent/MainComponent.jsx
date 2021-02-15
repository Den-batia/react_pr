import { Route } from 'react-router-dom';
import FirstComponent from '../FirstComponent/FirstComponent';
import Login from '../Login/Login';
import s from './MainComponent.module.css'

const MainComponent = (props) => {
    return(
        <div className={s.grid}>
            <Route exact component={FirstComponent} path="/" />
            <Route component={Login} path="/login" />
        </div>
    )
}

export default MainComponent