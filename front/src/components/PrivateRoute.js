import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import { useHistory, Redirect,Route } from 'react-router';

const PrivateRoute = ({path, component}) => {
    const {isAuthentificated} = useContext(AuthContext);
    const {location} = useHistory();
    
    if(isAuthentificated) {
        {console.log('i am pass here')}
        return <Route path={path} component={component}/>
    } else if(!isAuthentificated && location.pathname ) {
        return <Redirect to="/login"></Redirect>
    } else {
        return <Redirect to='/'></Redirect>
    }
}
export default PrivateRoute;