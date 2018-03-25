import '../../style/question.css';
import React from 'react';
import Notification from '../Notification';
import QuestionSubmit from './QuestionSubmit';
import QuestionList from './QuestionList'

const QuestionPanel = () => (
    <div className="question-panel">
        <QuestionSubmit/>
        <QuestionList/>
    </div>
);

export default QuestionPanel;