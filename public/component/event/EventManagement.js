import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import EventTable from './EventTable';
import EventCreate from './EventCreate';
import {fetchEvents} from '../../action';

class EventManagement extends PureComponent {

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        return (
            <div>
                <EventCreate/>
                <EventTable/>
            </div>
        );
    }
}


export default connect(
    () => ({}),
    {fetchEvents}
)(EventManagement);