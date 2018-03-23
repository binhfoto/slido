import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {
    EVENT_MANAGEMENT_ROUTE,
    SIGN_IN_ROUTE,
    HOME_ROUTE
} from '../constants';

const Header = ({isSignedIn = false, title = 'Sli.do', onLogout, location: {pathname}, history}) => {

    let logIn, logOut, events;

    if (pathname !== SIGN_IN_ROUTE) {
        if (isSignedIn) {
            logOut = <Button color="inherit" onClick={onLogout}>Logout</Button>;
            events = <Button color="inherit" onClick={() => history.push(EVENT_MANAGEMENT_ROUTE)}>Events</Button>
        } else {
            logIn = <Button color="inherit" onClick={() => history.push(SIGN_IN_ROUTE)}>Login</Button>
        }
    }

    return (
        <div className="header">
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit" className="title">{title}</Typography>
                    <Button color="inherit" onClick={() => history.push(HOME_ROUTE)}>Home</Button>
                    {logIn}
                    {events}
                    {logOut}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(
    connect(
        ({isSignedIn}) => ({isSignedIn})
    )(Header)
);