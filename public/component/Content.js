import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EventCodeInput from "./event/EventCodeInput";
import EventRoom from "./event/EventRoom";
import EventManagement from "./event/EventManagement";
import SignIn from "./SignIn";
import {
    HOME_ROUTE,
    SIGN_IN_ROUTE,
    EVENT_ROOM_ROUTE,
    EVENT_MANAGEMENT_ROUTE
} from '../constants';

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path={HOME_ROUTE} exact component={EventCodeInput}/>
                <Route path={SIGN_IN_ROUTE} component={SignIn}/>
                <Route path={EVENT_ROOM_ROUTE(':id')} exact component={EventRoom}/>
                <Route path={EVENT_MANAGEMENT_ROUTE} exact component={EventManagement}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
};

export default Content;