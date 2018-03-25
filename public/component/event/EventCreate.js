import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {createEvent} from '../../action';
import Card, {CardHeader, CardContent, CardActions} from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

class EventCreate extends PureComponent {

    resetInput () {
        this.nameInput.value = '';
        this.codeInput.value = '';
        this.fromInput.value = '';
        this.toInput.value = '';
    }

    handleCreateEvent() {
        const name = this.nameInput.value;
        const code = this.codeInput.value;
        const from = this.fromInput.value;
        const to = this.toInput.value;
        if (name && code && from && to) {
            this.props.createEvent({name, code, from, to});
            this.resetInput();
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
                            autoFocus={true}
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
                        <IconButton className="add-button" variant="fab" aria-label="add" color="primary" onClick={this.handleCreateEvent.bind(this)}>
                            <AddIcon />
                        </IconButton>
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