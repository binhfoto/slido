import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import EventTable from './EventTable';
import {fetchEvents} from '../../action';

class EventManagement extends PureComponent{

    componentDidMount () {
        this.props.fetchEvents();
    }

    render () {
        return (
            <div>
                <EventTable/>
            </div>
        );
    }
}


export default connect(
    () => null,
    {fetchEvents}
)(EventManagement);