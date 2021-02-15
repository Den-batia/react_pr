import { Route } from 'react-router-dom';
import FirstComponent from '../FirstComponent/FirstComponent';
import Login from '../Login/Login';

const MainComponent = (props) => {
    return(
        <div>
            <Route exact component={FirstComponent} path="/" />
            <Route component={Login} path="/login" />
        </div>
    )
}

export default MainComponent