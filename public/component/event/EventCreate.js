import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {createEvent} from '../../action';
import Card, {CardHeader, CardContent, CardActions} from 'material-ui/Card';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

class EventCreate extends PureComponent {

    constructor(props) {
        super(props);
        this.nameInput = {};
        this.codeInput = {};
        this.fromInput = {};
        this.toInput = {};
    }

    onCreateEvent() {
        const name = this.nameInput.value;
        const code = this.codeInput.value;
        const from = this.fromInput.value;
        const to = this.toInput.value;
        if (name && code && from && to) {
            this.props.createEvent({name, code, from, to});
        }
    }

    render() {
        return (
            <div className="event-create">
                <Card>
                    <CardContent className="column-layout">
                        <Typography gutterBottom variant="subheading">
                            Create Event
                        </Typography>
                        <TextField
                            id="name"
                            label="Name"
                            inputRef={field => {this.nameInput = field}}
                        />
                        <TextField
                            id="code"
                            label="Code"
                            inputRef={field => {this.codeInput = field}}
                        />
                        <br/>
                        <TextField
                            id="from"
                            label="Start Event"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={field => {this.fromInput = field}}
                        />
                        <TextField
                            id="to"
                            label="End Event"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={field => {this.toInput = field}}
                        />
                    </CardContent>
                    <CardActions>
                        <Button variant="fab" mini aria-label="add" color="primary" onClick={this.onCreateEvent.bind(this)}>
                            <AddIcon />
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect(
    ({isLoading}) => ({isLoading}),
    {createEvent}
)(EventCreate);