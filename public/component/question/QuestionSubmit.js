import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import Card, {CardContent, CardActions} from 'material-ui/Card';
import Button from 'material-ui/Button';

import {postQuestion} from "../../action";

class QuestionSubmit extends PureComponent {

    constructor(props) {
        super(props);
    }

    onPostQuestion () {
        const eventId = this.props.event._id;
        const question = this.questionInput.value;
        const author = this.authorInput.value;
        if (question) {
            this.props.postQuestion({eventId, question, author});
        }
    }

    render() {
        return (
            <Card className="question-submit">
                <CardContent>
                    <TextField
                        id="question"
                        label="ask question"
                        fullWidth={true}
                        inputRef={field => this.questionInput = field}
                    />
                    <br/>
                    <TextField
                        id="author"
                        label="author (optional)"
                        defaultValue={this.props.isSignedIn ? 'admin' : ''}
                        fullWidth={true}
                        inputRef={field => this.authorInput = field}
                    />
                </CardContent>
                <CardActions>
                    <Button variant="raised" color="primary" className="question-action" onClick={this.onPostQuestion.bind(this)}>
                        Post
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default connect(
    ({isLoading, event, isSignedIn}) => ({isLoading, event, isSignedIn}),
    {postQuestion}
)(QuestionSubmit);