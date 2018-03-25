import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

class QuestionEdit extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleEdit() {
        this.handleDialogOpen();

    }

    handleDialogOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.props.handleCloseMenu();
        this.setState({ open: false });
    };

    render() {
        return (
            <div className="question-edit">
                <MenuItem onClick={this.handleEdit.bind(this)}>Edit</MenuItem>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit question</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="question"
                            label="Question"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose.bind(this)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose.bind(this)} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

export default QuestionEdit;