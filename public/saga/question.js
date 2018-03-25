import {call, put, takeEvery} from "redux-saga/effects";
import Api from "../service/api";

import {
    POST_QUESTION_REQUEST,
    HIGHLIGHT_QUESTION_REQUEST,
    DELETE_QUESTION_REQUEST,
    EDIT_QUESTION_REQUEST
} from '../constants';

import {
    postQuestionSuccess,
    postQuestionFail,
    highlightQuestionSuccess,
    highlightQuestionFail,
    deleteQuestionSuccess,
    deleteQuestionFail,
    editQuestionSuccess,
    editQuestionFail
} from '../action';

/******************************** POST QUESTION SAGA ********************************/
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
};

/******************************** HIGHLIGHT QUESTION SAGA ********************************/
function * watchHighlightQuestion (action) {
    const {question, error} = yield call(Api.updateQuestion, action.question);
    if (question) {
        yield put(highlightQuestionSuccess(question));
    } else {
        yield put(highlightQuestionFail(error));
    }
}

function * highlightQuestion () {
    yield takeEvery(HIGHLIGHT_QUESTION_REQUEST, watchHighlightQuestion);
};

/******************************** DELETE QUESTION SAGA ********************************/
function * watchDeleteQuestion (action) {
    const {question, error} = yield call(Api.deleteQuestion, action.question);
    if (question) {
        yield put(deleteQuestionSuccess(question));
    } else {
        yield put(deleteQuestionFail(error));
    }
}

function * deleteQuestion () {
    yield takeEvery(DELETE_QUESTION_REQUEST, watchDeleteQuestion);
};

/******************************** EDIT QUESTION SAGA ********************************/
function * watchEditQuestion (action) {
    const {question, error} = yield call(Api.updateQuestion, action.question);
    if (question) {
        yield put(editQuestionSuccess(question));
    } else {
        yield put(editQuestionFail(error));
    }
}

function * editQuestion () {
    yield takeEvery(EDIT_QUESTION_REQUEST, watchEditQuestion);
}

export default {
    postQuestion,
    highlightQuestion,
    deleteQuestion,
    editQuestion
}