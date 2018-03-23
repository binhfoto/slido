import '../style/signIn.css';

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Card, {CardContent, CardHeader} from 'material-ui/Card';
import Button from 'material-ui/Button';
import {CircularProgress} from 'material-ui/Progress';
import TextField from 'material-ui/TextField';

import Notification from './Notification';
import {signIn} from "../action";

class SignIn extends PureComponent {

    formSubmit (evt) {
        evt.preventDefault();
        if ((!this.usernameInput || !this.passwordInput) || !this.usernameInput.value || !this.passwordInput.value) return;
        this.props.onSubmit(this.usernameInput.value, this.passwordInput.value);
    }

    render () {
        return (
            <div className="sign-in">
                <Card>
                    <CardHeader title="Login"/>
                    <CardContent>
                        <form className="form" noValidate autoComplete="off" onSubmit={this.formSubmit.bind(this)}>
                            <TextField
                                id="username"
                                label="user name"
                                margin="normal"
                                disabled={this.props.isLoading}
                                inputRef={field => {
                                    this.usernameInput = field;
                                }}
                            />
                            <TextField
                                id="password"
                                label="password"
                                type="password"
                                margin="normal"
                                disabled={this.props.isLoading}
                                inputRef={field => {
                                    this.passwordInput = field;
                                }}
                            />
                            <Button size="small"
                                    color="primary"
                                    className="submit"
                                    type="submit"
                                    variant="raised"
                                    disabled={this.props.isLoading}>
                                {this.props.isLoading ? <CircularProgress size={24}/> : 'Submit'}
                            </Button>
                            <Notification/>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default connect(
    ({isLoading}) => ({isLoading}),
    {onSubmit: signIn}
)(SignIn);