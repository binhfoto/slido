import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EventCodeInput from "./event/EventCodeInput";
import EventRoom from "./event/EventRoom";
import EventManagement from "./event/EventManagement";
import SignIn from "./SignIn";

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/" exact component={EventCodeInput}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/eventRoom/:id" exact component={EventRoom}/>
                <Route path="/eventManagement" exact component={EventManagement}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
};

export default Content;