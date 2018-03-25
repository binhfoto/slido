import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import {highlightQuestion, highlightQuestionFail} from '../../action';

class QuestionAction extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    handleClickMore (event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleCloseMenu() {
        this.setState({ anchorEl: null });
    };

    handleHighlight() {
        this.handleCloseMenu();
        const event = this.props.event;
        const question =  this.props.question;
        const newHighlightVal = !question.isHighlight;
        const isMax = event.questions.filter(_question => _question.isHighlight).length >= 3;

        if (newHighlightVal && isMax) {
            this.props.highlightQuestionFail({message: 'Admin cannot highlight more than 3 questions'});
        } else {
            this.props.highlightQuestion({
                _id: question._id,
                isHighlight: newHighlightVal
            });
        }
    }

    handleEdit() {
        this.handleCloseMenu();
    }

    handleDelete() {
        this.handleCloseMenu();
    }

    render() {
        const { anchorEl } = this.state;
        return (
            <div>
                <IconButton
                    aria-label="More"
                    aria-owns={anchorEl ? 'action-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClickMore.bind(this)}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="action-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleCloseMenu.bind(this)}
                    PaperProps={{
                        style: {
                            maxHeight: 48 * 3.5,
                            width: 100,
                        },
                    }}
                >
                    <MenuItem onClick={this.handleHighlight.bind(this)}>{this.props.question.isHighlight ? 'Unhighlight' : 'Highlight'}</MenuItem>
                    <MenuItem onClick={this.handleEdit.bind(this)}>Edit</MenuItem>
                    <MenuItem onClick={this.handleDelete.bind(this)}>Delete</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default connect(
    ({event}, {question}) => ({event, question}),
    {highlightQuestion, highlightQuestionFail}
)(QuestionAction);