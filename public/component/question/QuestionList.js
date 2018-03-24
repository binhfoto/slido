import '../../style/question.css';
import React from 'react';
import {connect} from 'react-redux';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import QuestionItem from './QuestionItem';

const QuestionList = ({questions}) => {
    return (
        <div className="question-list">
            <List>
                {
                    questions.map((question, index) => (
                        <div key={question._id}>
                            <QuestionItem question={question}/>
                            {index + 1 < questions.length && <Divider/>}
                        </div>
                    ))
                }
            </List>
        </div>
    );
};

export default connect(
    ({event: {questions}}) => ({questions})
)(QuestionList);