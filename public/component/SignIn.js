import '../style/signIn.css';

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Card, {CardContent, CardHeader} from 'material-ui/Card';
import Button from 'material-ui/Button';
import {CircularProgress} from 'material-ui/Progress';
import TextField from 'material-ui/TextField';

import Notification from './Notification';
import {signIn} from "../action";

class SignIn extends PureComponent {

    handleFormSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.usernameInput.value, this.passwordInput.value);
    }

    componentWillReceiveProps({isSignedIn = false}) {
        if (isSignedIn) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="sign-in">
                <Card>
                    <CardHeader title="Login"/>
                    <CardContent>
                        <form className="form" noValidate autoComplete="off" onSubmit={this.handleFormSubmit.bind(this)}>
                            <TextField
                                id="username"
                                label="username"
                                margin="normal"
                                disabled={this.props.isLoading}
                                autoFocus
                                placeholder="admin"
                                inputRef={field => {this.usernameInput = field }}
                            />
                            <TextField
                                id="password"
                                label="password"
                                type="password"
                                margin="normal"
                                placeholder="changeit"
                                disabled={this.props.isLoading}
                                inputRef={field => { this.passwordInput = field }}
                            />
                            <Button size="small"
                                    color="primary"
                                    className="submit"
                                    type="submit"
                                    variant="raised"
                                    disabled={this.props.isLoading}>
                                Login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withRouter(
    connect(
        ({isLoading, isSignedIn}) => ({isLoading, isSignedIn}),
        {onSubmit: signIn}
    )(SignIn)
);