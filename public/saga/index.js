import {all} from 'redux-saga/effects';

import EventSaga from './event';
import QuestionSaga from './question';
import SignInSaga from './signIn';

/******************************** ROOT SAGA ********************************/
export default function* () {
    yield all([
        SignInSaga.signIn(),
        EventSaga.fetchEventByCode(),
        EventSaga.fetchEvents(),
        EventSaga.createEvent(),
        QuestionSaga.postQuestion(),
        QuestionSaga.highlightQuestion(),
        QuestionSaga.deleteQuestion(),
        QuestionSaga.editQuestion()
    ]);
};