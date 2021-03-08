import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import s from './MainComponent.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentComonent from '../ContentComonent/ContentComonent';


const MainComponent = (props) => {
    return(
        <div className={s.grid}>
            <Route exact component={ContentComonent} path="/"/>
            <Route component={Login} path="/login" />

        </div>
    )
}

export default MainComponent