import '../../style/event.css';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import Card, {CardContent, CardActions} from 'material-ui/Card';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import Typography from 'material-ui/Typography';
import {
    DATE_TIME_FORMAT
} from '../../constants';

const EventDetail = ({event, isSignedIn}) => {

    const action = (
        <CardActions>
            <Button variant="fab" mini aria-label="delete" color="secondary">
                <DeleteIcon />
            </Button>
        </CardActions>
    );
    return (
        <div className="event-detail">
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="subheading">
                        {event.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {`#${event.code}`}
                    </Typography>
                    <Typography component="p">
                        {`Start: ${moment(event.from).format(DATE_TIME_FORMAT)}`}
                    </Typography>
                    <Typography component="p">
                        {`End: ${moment(event.to).format(DATE_TIME_FORMAT)}`}
                    </Typography>
                </CardContent>
                {isSignedIn ? action : null}
            </Card>
        </div>
    );
};

export default connect(
    ({event, isSignedIn}) => ({event, isSignedIn})
)(EventDetail);