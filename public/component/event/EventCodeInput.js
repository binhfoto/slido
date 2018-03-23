import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';

class EventCodeInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="eventCodeInput">
                <TextField
                    id="eventCode"
                    label="Event Code"
                    placeholder="enter code here"
                    margin="normal"
                    className="input"
                />
                <IconButton aria-label="Go">
                    <SearchIcon />
                </IconButton>
            </div>
        )
    }
}

export default EventCodeInput;