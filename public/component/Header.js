import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import {
    HOME_ROUTE,
    EVENT_MANAGEMENT_ROUTE,
    SIGN_IN_ROUTE
} from '../constants';

import {
    signOut,
    resetEvent
} from "../action";

import Token from '../service/token';

const Header = ({isSignedIn = false, title = 'Sli.do', onSignOut, resetEvent, location: {pathname}, history}) => {

    let logIn, logOut, events;

    const home = <Button color="inherit" onClick={() => {
        resetEvent();
        pathname !== HOME_ROUTE && history.push(HOME_ROUTE);
    }}>Home</Button>;

    const _onSignOut = () => {
        Token.remove();
        onSignOut();
        (pathname !== HOME_ROUTE) && history.push(HOME_ROUTE);
    };

    if (pathname !== SIGN_IN_ROUTE) {
        if (isSignedIn) {
            logOut = <Button color="inherit" onClick={_onSignOut}>Logout</Button>;
            events = <Button color="inherit" onClick={() => history.push(EVENT_MANAGEMENT_ROUTE)}>Events</Button>
        } else {
            logIn =  <Button color="inherit" onClick={() => {history.push(SIGN_IN_ROUTE)}}>Login</Button>;
        }
    }

    return (
        <div className="header">
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit" className="title">{title}</Typography>
                    {home}
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
        ({isSignedIn}) => ({isSignedIn}),
        {onSignOut: signOut, resetEvent}
    )(Header)
);