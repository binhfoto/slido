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

    constructor(props) {
        super(props);
        this.state = {
            isLoading: this.props.isLoading
        };
        this.usernameInput = {};
        this.passwordInput = {};
    }

    formSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.usernameInput.value, this.passwordInput.value);
    }

    componentWillReceiveProps({isLoading, isSignedIn = false}) {
        if (isSignedIn) {
            this.props.history.push('/');
        }
        this.setState({isLoading});
    }

    render() {
        return (
            <div className="sign-in">
                <Card>
                    <CardHeader title="Login"/>
                    <CardContent>
                        <form className="form" noValidate autoComplete="off" onSubmit={this.formSubmit.bind(this)}>
                            <TextField
                                id="username"
                                label="username"
                                margin="normal"
                                disabled={this.state.isLoading}
                                inputRef={field => {
                                    this.usernameInput = field;
                                }}
                            />
                            <TextField
                                id="password"
                                label="password"
                                type="password"
                                margin="normal"
                                disabled={this.state.isLoading}
                                inputRef={field => {
                                    this.passwordInput = field;
                                }}
                            />
                            <Button size="small"
                                    color="primary"
                                    className="submit"
                                    type="submit"
                                    variant="raised"
                                    disabled={this.state.isLoading}>
                                {this.state.isLoading ? <CircularProgress size={24}/> : 'Login'}
                            </Button>
                            <Notification/>
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