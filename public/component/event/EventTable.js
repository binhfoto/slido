import React from 'react';
import {connect} from 'react-redux';
import moment from "moment";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Clear';

import {DATE_TIME_FORMAT} from "../../constants";

const EventTable = ({events}) => {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Start</TableCell>
                        <TableCell>End</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map(event => {
                        return (
                            <TableRow key={event._id}>
                                <TableCell>{event.name}</TableCell>
                                <TableCell>{event.code}</TableCell>
                                <TableCell>{moment(event.from).format(DATE_TIME_FORMAT)}</TableCell>
                                <TableCell>{moment(event.from).format(DATE_TIME_FORMAT)}</TableCell>
                                <TableCell>
                                    <IconButton color="secondary" aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default connect(
    ({events}) => ({events})
)(EventTable);