import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import s from './MainComponent.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentComonent from '../ContentComonent/ContentComonent';
import PeopleComponent from '../PeopleComponent/PeopleComponent'
import RealtComponent from '../RealtComponent/RealtComponent';
import TechComponent from '../TechComponent/TechComponent';
import AutoComponent from '../AutoComponent/AutoComponent';

const MainComponent = (props) => {
    return(
        <div className={s.grid}>
            <Route exact component={ContentComonent} path="/"/>
            <Route exact component = {PeopleComponent} path="/people"/>
            <Route exact component = {TechComponent} path="/tech"/>
            <Route exact component = {RealtComponent} path="/realt"/>
            <Route exact component = {AutoComponent} path="/auto"/>
            <Route component={Login} path="/login" />

        </div>
    )
}

export default MainComponent