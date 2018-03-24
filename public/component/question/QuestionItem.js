import React from 'react';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MoreIcon from 'material-ui-icons/MoreVert';
import Favorite from 'material-ui-icons/ThumbUp';
import NotFavorite from 'material-ui-icons/ThumbDown';

const QuestionItem = ({question}) => (

    <div className={question.isHighlight ? 'question-item-highlight' : ''}>
        <ListItem>
            <ListItemText primary={question.question} secondary={question.author}/>
            <ListItemSecondaryAction>

                <Button size="small">
                    <NotFavorite color="disabled"/>
                </Button>

                <Button size="small" color="primary">
                    <Favorite/>
                    {question.vote}
                </Button>

                <IconButton aria-label="author">
                    <MoreIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </div>
);

export default QuestionItem;