import React from 'react';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui-icons/MoreVert';
import Favorite from 'material-ui-icons/ThumbUp';
import NotFavorite from 'material-ui-icons/ThumbDown';
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

/*
<Button size="small">
                    <NotFavorite color="disabled"/>
                </Button>

                <Button size="small" color="primary">
                    <Favorite/>
                    {question.vote}
                </Button>
* */