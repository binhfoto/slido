import React from 'react';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui-icons/MoreVert';

const QuestionItem = ({question}) => (
    <div>
        <ListItem>
            <ListItemText primary={question.question} secondary={question.author}/>
            <ListItemSecondaryAction>
                <IconButton aria-label="author">
                    <MoreIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </div>
);

export default QuestionItem;