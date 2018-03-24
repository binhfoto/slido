import { call, put, takeEvery, all } from 'redux-saga/effects';

import {
    SIGNIN_REQUEST,
    FETCH_EVENT_REQUEST,
    FETCH_EVENTS_REQUEST,
    CREATE_EVENT_REQUEST,
    POST_QUESTION_REQUEST
} from '../constants';

import {
    signInSuccess,
    signInFail,
    fetchEventByCodeSuccess,
    fetchEventByCodeFail,
    fetchEventsSuccess,
    fetchEventsFail,
    createEventSuccess,
    createEventFail,
    postQuestionSuccess,
    postQuestionFail
} from '../action';

import Api from '../service/api';
import Token from '../service/token';

/********************************SIGN IN SAGA********************************/
function * watchSignInRequest ({username, password}) {
    const {token, error} = yield call(Api.signIn, username, password);
    if (token) {
        Token.set(token);
        yield put(signInSuccess(token));
    } else {
        yield put(signInFail(error));
    }
}

function * signIn() {
    yield takeEvery(SIGNIN_REQUEST, watchSignInRequest);
}

/********************************FETCH EVENT BY CODE SAGA********************************/
function * watchFetchEvent({code}) {
    const {event, error} = yield call(Api.fetchEventByCode, code);
    if (event) {
        yield put(fetchEventByCodeSuccess(event));
    } else {
        yield put(fetchEventByCodeFail(error));
    }
}

function * fetchEventByCode() {
    yield takeEvery(FETCH_EVENT_REQUEST, watchFetchEvent)
}

/********************************FETCH ALL EVENTS SAGA********************************/
function * watchFetchEvents ({}) {
    const {events, error} = yield call(Api.fetchEvents);
    if (events) {
        yield put(fetchEventsSuccess(events));
    } else {
        yield put(fetchEventsFail(error));
    }
}

function * fetchEvents () {
    yield takeEvery(FETCH_EVENTS_REQUEST, watchFetchEvents);
}

/********************************CREATE EVENT SAGA********************************/
function * watchCreateEvent (action) {
    const {event, error} = yield call(Api.createEvent, action.event);
    if (event) {
        yield put(createEventSuccess([event]));
    } else {
        yield put(createEventFail(error));
    }
}

function * createEvent () {
    yield takeEvery(CREATE_EVENT_REQUEST, watchCreateEvent);
}

/********************************POST QUESTION SAGA********************************/
function * watchPostQuestion (action) {
    const {question, error} = yield call(Api.postQuestion, action.question);
    if (question) {
        yield put(postQuestionSuccess(question));
    } else {
        yield put(postQuestionFail(error));
    }
}

function * postQuestion () {
    yield takeEvery(POST_QUESTION_REQUEST, watchPostQuestion);
}

/********************************ROOT SAGA********************************/
export default function * () {
    yield all([
        signIn(),
        fetchEventByCode(),
        fetchEvents(),
        createEvent(),
        postQuestion()
    ]);
};