import React from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {resetNotificationMessage} from '../action';

const Notification = ({notificationMessage, resetNotificationMessage}) => (
    <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={notificationMessage !== null}
        onClose={resetNotificationMessage}
        autoHideDuration={4000}
        SnackbarContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{notificationMessage}</span>}
    />
);

export default connect(
    ({notificationMessage}) => ({notificationMessage}),
    {resetNotificationMessage}
)(Notification);