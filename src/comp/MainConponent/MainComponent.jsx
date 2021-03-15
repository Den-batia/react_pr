import React from 'react'
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import s from './MainComponent.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withLazyComponent } from '../hoc/withLazyComponent';

const ContentComonent = React.lazy(() => import('../ContentComonent/ContentComonent'));
const PeopleComponent = React.lazy(() => import('../PeopleComponent/PeopleComponent'));
const RealtComponent = React.lazy(() => import('../RealtComponent/RealtComponent'));
const AutoComponent = React.lazy(() => import('../AutoComponent/AutoComponent'));
const TechComponent = React.lazy(() => import('../TechComponent/TechComponent'));


const MainComponent = (props) => {
    return(
        <div className={s.grid}>
            <Route exact component={withLazyComponent(ContentComonent)} path="/"/>
            <Route exact component = {withLazyComponent(PeopleComponent)} path="/people"/>
            <Route exact component = {withLazyComponent(TechComponent)} path="/tech"/>
            <Route exact component = {withLazyComponent(RealtComponent)} path="/realt"/>
            <Route exact component = {withLazyComponent(AutoComponent)} path="/auto"/>
            <Route component={Login} path="/login" />
        </div>
    )
}

export default MainComponent