import '../../style/event.css';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import Card, {CardContent, CardActions, CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Clear';
import Typography from 'material-ui/Typography';
import {
    DATE_TIME_FORMAT
} from '../../constants';

const EventDetail = ({event, isSignedIn}) => {

    const action = (
        <IconButton color="secondary">
            <DeleteIcon/>
        </IconButton>
    );

    return (
        <div className="event-detail">
            <Card>
                <CardHeader
                    title={event.name}
                    subheader={`#${event.code}`}
                    action={isSignedIn ? action : null}
                />
                <CardContent>

                    <Typography component="p">
                        {`Start: ${moment(event.from).format(DATE_TIME_FORMAT)}`}
                    </Typography>
                    <Typography component="p">
                        {`End: ${moment(event.to).format(DATE_TIME_FORMAT)}`}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default connect(
    ({event, isSignedIn}) => ({event, isSignedIn})
)(EventDetail);


/*<Typography gutterBottom variant="subheading">
                        {event.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {`#${event.code}`}
                    </Typography>*/