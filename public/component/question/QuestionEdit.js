import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

class QuestionEdit extends PureComponent {

    handleUpdateQuestion() {
        this.props.editQuestion({
            _id: this.props.question._id,
            question: this.questionInput.value
        });
        this.props.handleCloseDialog();
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.openEditDialog}
                    onClose={this.props.handleCloseDialog}
                    aria-labelledby="form-dialog-title"
                    className="question-edit"
                    fullWidth
                >
                    <DialogTitle id="form-dialog-title">Edit question</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="question"
                            label="Question"
                            margin="dense"
                            fullWidth
                            autoFocus
                            defaultValue={this.props.question.question}
                            inputRef={field => {this.questionInput = field}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleCloseDialog} variant="raised" color="default">
                            Cancel
                        </Button>
                        <Button onClick={this.handleUpdateQuestion.bind(this)} variant="raised" color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

export default QuestionEdit;