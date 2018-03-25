import React from 'react';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import QuestionAction from './QuestionAction';

const QuestionItem = ({question, isSignedIn}) => (
    <div className={question.isHighlight ? 'question-item-highlight' : ''}>
        <ListItem>
            <ListItemText primary={question.question} secondary={question.author}/>
            <ListItemSecondaryAction>
                {isSignedIn ? <QuestionAction question={question}/> : null}
            </ListItemSecondaryAction>
        </ListItem>
    </div>
);

export default QuestionItem;