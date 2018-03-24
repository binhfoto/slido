import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import {CircularProgress} from 'material-ui/Progress';
import Card, {CardContent} from 'material-ui/Card';
import Notification from '../Notification';
import {fetchEventByCode} from "../../action";
import {EVENT_ROOM_ROUTE} from '../../constants';

class EventCodeInput extends Component {

    constructor(props) {
        super(props);
        this.eventCodeInput = {};
        this.state = {
            isLoading: this.props.isLoading
        };
    }

    formSubmit(evt) {
        evt.preventDefault();
        this.eventCodeInput.value && this.props.onSubmit(this.eventCodeInput.value);
    }

    componentWillReceiveProps({isLoading, event}) {
        if(!_.isEmpty(event)) {
            this.props.history.push(EVENT_ROOM_ROUTE(event.code));
        }
        this.setState({isLoading});
    }

    render() {
        return (
            <div className="eventCodeInput">
                <Card>
                    <CardContent>
                        <form noValidate autoComplete="off" onSubmit={this.formSubmit.bind(this)}>
                            <TextField
                                id="eventCode"
                                label="event code"
                                placeholder="enter code here"
                                margin="normal"
                                className="input"
                                inputRef={field => {this.eventCodeInput = field;}}
                            />
                            <IconButton aria-label="Go" type="submit">
                                {this.state.isLoading ? <CircularProgress size={24}/> : <SearchIcon />}
                            </IconButton>
                        </form>
                    </CardContent>
                </Card>
                <Notification/>
            </div>
        )
    }
}

export default withRouter(
    connect(
        ({isLoading, event}) => ({isLoading, event}),
        {onSubmit: fetchEventByCode}
    )(EventCodeInput)
);