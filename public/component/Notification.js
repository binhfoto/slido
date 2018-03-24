import React from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {resetErrorMessage} from '../action';

const Notification = ({errorMessage, resetErrorMessage}) => (
    <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={errorMessage !== null}
        onClose={resetErrorMessage}
        autoHideDuration={4000}
        SnackbarContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{errorMessage}</span>}
    />
);

export default connect(
    ({errorMessage}) => ({errorMessage}),
    {resetErrorMessage}
)(Notification);